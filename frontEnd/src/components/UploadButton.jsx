import React from 'react'
import {FaUpload} from "react-icons/fa"

const UploadButton = () => {
  return (
    <>
        <input type="file" className="hidden" id='upload_image'/>
        <label className='flex items-center cursor-pointer w-fit transition rounded-lg py-1.5 px-2 hover:bg-green-600' htmlFor="upload_image"><FaUpload/>&nbsp; Choose A Image</label>
    </>
  )
}

export default UploadButton