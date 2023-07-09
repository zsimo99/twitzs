import  { useEffect, useState } from 'react'
import {useLocation,useSearchParams} from "react-router-dom"
import Register from '../components/Register'
import Login from '../components/Login'
import { login,reset,register } from "../features/auth/authSlice"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"
import {useSelector,useDispatch} from "react-redux"
import {Spinner} from "../components"



const Auth = () => {
  const navigate=useNavigate()
  const dispatch=useDispatch()
    
  const {isError,isSuccess,isLoading,message,user}=useSelector(state=>state.auth)
  const [formData,setFormData]=useState({
    email:"",displayName:"",password:"",password2:""
})
const [showed,setShowed]=useState("login")

const {displayName,email,password,password2}=formData

const [searchParams,setSearchParams]=useSearchParams()

const handleSwitch=()=>{
    setShowed((prev)=>prev==="login"?"register":"login")
    setFormData({email:"",displayName:"",password:"",password2:""})
    navigate(`/auth?showed=${showed==="login"?"register":"login"}`)
}

const subLogin=(e)=>{
    e.preventDefault()
    const userData={email,password}
    dispatch(login(userData))
}
const subRegister=(e)=>{
  e.preventDefault()
  if(password !==password2) return toast.error("Password dont match")
  const userData={
    displayName,email,password
  }
  dispatch(register(userData))
}
useEffect(()=>{
    if(user) navigate("/")
    const showed=searchParams.get("showed") || "login"
    setShowed(showed)
    if(isError) toast.error(message)
    if(isSuccess) {
      toast.success("welcome back")
      navigate("/")
     }
     return ()=> dispatch(reset())
},[searchParams,isSuccess,isError,message,dispatch,navigate,user])


if(isLoading) return <Spinner/>
  return (
      <div className='auth-cont m-auto z-50 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <div onClick={handleSwitch} className='switch-box'>
            <div className={`switch show-${showed}`}></div>
        </div>
        
        <div className='authCont'>
            <div className={`p-y4 bg-gray-800 authCard ${showed==="register" ? "showRegister" :""}`}>
                <Login showed={showed} login={subLogin} formData={formData} setFormData={setFormData}/>
                <Register showed={showed} register={subRegister} formData={formData} setFormData={setFormData}/>
            </div>
        </div>
      </div>
  )
}

export default Auth