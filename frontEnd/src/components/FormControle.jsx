import React, { useEffect, useState } from 'react'

const FormControle = ({id,value,setFormData,name,type}) => {
    const [focused,setFocused]=useState(false)
    const [vide,setVide]=useState(true)
    const handleChange=(e)=>{
        setFormData((prev)=>({...prev,[e.target.id]:e.target.value}))
    }
    const onFocus=()=>{
        setFocused(true)
    }
    const onBlur=()=>{
        if(value!==""){
            setVide(false)
        }else{
            setVide(true)
        }
        setFocused(false)
    }
    useEffect(()=>{
        if(value!=="") setFocused(true)
    },[value])
  return (
    <>
    <div className="relative w-full">
        <label className={`text-white z-[-1] absolute left-4 transition-all ${(focused || !vide) ? ("top-0 translate-y-[-50%] text-[12px] bg-slate-800 px-1 z-20") : ("top-[50%] translate-y-[-50%] text-sm")}`} htmlFor="email">{name}</label>
        <input onFocus={onFocus} onBlur={onBlur} className={`w-full ps-2 py-1 focus:outline-none rounded-md bg-transparent border-2 text-white text-[14px] ${focused ? ("border-gray-500"):("border-gray-700")}`} id={id} type={type==="password"?"password":"text"} value={value} onChange={handleChange}/>
    </div>
</>
  )
}

export default FormControle