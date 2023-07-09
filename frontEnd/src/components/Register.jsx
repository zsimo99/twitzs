import {FaPlus} from "react-icons/fa"
import Button from "./Button"
import FormControle from "./FormControle"
const Register = ({formData,setFormData,register,showed}) => {
    
  return (
    <form onSubmit={register} className="register px-4 space-y-5 text-white">
        {showed==="register" && (
          <>
            <h1 className='text-cente my-4 text-center text-white'>Register</h1>
            <FormControle type="text" id="displayName" name="Dispay Name" value={formData.displayName} setFormData={setFormData}/>
            <FormControle type="text" id="email" name="Email" value={formData.email} setFormData={setFormData}/>
            <FormControle type="password" id="password" name="Password" value={formData.password} setFormData={setFormData}/>
            <FormControle type="password" id="password2" name="confirm Password" value={formData.password2} setFormData={setFormData}/>
            {/* <div className="flex items-center cursor-pointer w-fit transition rounded-lg py-1.5 px-2 hover:bg-green-600"><FaPlus className="me-2 block"/> Add Image</div> */}
            <Button type="submit" style="submitButton"/>
          </>
        )}
    </form>
  )
}

export default Register