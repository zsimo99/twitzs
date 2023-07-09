import { Link } from "react-router-dom"
import Button from "./Button"
import FormControle from "./FormControle"



const Login = ({formData,setFormData,login,showed}) => {
  
  return (
    <form onSubmit={login} className="login px-4 space-y-8 relative">
        {showed==="login" && (
        <>
          <h1 className='text-cente my-4 text-center text-white'>Login</h1>
          <FormControle type="text" id="email" name="Email" value={formData.email} setFormData={setFormData}/>
          <FormControle type="password" id="password" name="Password" value={formData.password} setFormData={setFormData}/>
          <Button type="submit" style="submitButton"/>
          <Link className="text-green-700 block text-base hover:text-green-800" to='/auth?showed=register'>Creat Accounte</Link>
        </>
        )}
    </form>
  )
}

export default Login