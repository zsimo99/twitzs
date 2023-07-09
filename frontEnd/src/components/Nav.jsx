import { Link } from "react-router-dom";
import {FaBars,FaCaretDown } from "react-icons/fa"
import {IoMdClose} from "react-icons/io"
import { useState,useEffect } from "react";
import {useSelector,useDispatch} from "react-redux"
import { logout } from "../features/auth/authSlice";
const Nav = () => {
  const dispatch=useDispatch()
  const {user}=useSelector(state=>state.auth)
  const [open,setOpen]=useState(false)
  const links=[
        {name:"Home",link:"/"},
        {name:"About",link:"/about"},
        {name:"Contact",link:"/contact"},
        {name:"Profile"},
    ]
    const Logout=()=>{
      dispatch(logout())
    }
  return (
    <div className="bg-gray-500 w-full fixed z-30 h-16 flex items-center top-0 left-0 shadow-md text-white">
      <div className="md:flex relative container m-auto px-3 py-2 items-center justify-between">
        <div className=" text-lg">
          <span>TwitZS</span>
        </div>
        <div onClick={()=>setOpen((prev)=>!prev)} className="md:hidden absolute top-[50%] translate-y-[-50%] right-4 cursor-pointer py-3">
          {open? (<IoMdClose/>):(<FaBars/>)}
        </div>
        <ul className={`transition-all z-[-1] md:z-auto opacity-0 md:opacity-100 md:flex w-full md:w-fit md:space-x-2 absolute md:static left-0 translate-y-[100%] md:text-white md:translate-y-0 md:bg-transparent bg-white text-black ${open? "bottom-[-10px] opacity-100":"bottom-[200px]"}`}>
          {links.map((link,id)=>link.name!=="Profile"?(<li onClick={()=>setOpen((prev)=>!prev)} key={id} className=" transition-all hover:bg-gray-400 md:rounded-md"><Link className=" text-lg font-thin md:py-1 py-2 pl-2 md:px-3 cursor-pointer transition block hover:translate-x-2 md:hover:translate-x-0 hover:text-white relative" to={link.link}>{link.name}</Link></li>):(
          user ? 
          // (<li onClick={()=>setOpen((prev)=>!prev)} key={id} className="flex items-center text-lg font-thin md:py-1 py-2 pl-2 md:px-3 cursor-pointer">Profile &nbsp; <FaCaretDown /></li>)
          <li key={id} onClick={Logout} className="transition-all hover:bg-gray-400 md:rounded-md hover:text-white flex items-center text-lg font-thin md:py-1 py-2 pl-2 md:px-3 cursor-pointer">Logout</li>
          :<li onClick={()=>setOpen((prev)=>!prev)} className="transition-all hover:bg-gray-400 md:rounded-md"><Link className="hover:text-white hover:translate-x-2 md:hover:translate-x-0 flex items-center text-lg font-thin md:py-1 py-2 pl-2 md:px-3 cursor-pointer" to="/auth">Login</Link></li>
          ))}
        </ul>
      </div>
    </div>
  )
}


export default Nav ;