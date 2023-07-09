import { Link } from "react-router-dom"
import Button from "./Button"
import FormControle from "./FormControle"



const Login = ({formData,setFormData,login,showed}) => {
  
  return (
    <form onSubmit={login} className="login px-4 space-y-8 relative text-secondary-200">
        {showed==="login" && (
        <>
          <h1 className='my-4 text-xl font-bold text-center text-tertiary-300'>Login</h1>
          <FormControle type="text" id="email" name="Email" value={formData.email} setFormData={setFormData}/>
          <FormControle type="password" id="password" name="Password" value={formData.password} setFormData={setFormData}/>
          <Button type="submit" style="submitButton"/>
          <Link className="text-tertiary-300 block text-xl font-semibold w-fit hover:text-tertiary-400" to='/auth?showed=register'>Creat Accounte</Link>
        </>
        )}
    </form>
  )
}

export default Login