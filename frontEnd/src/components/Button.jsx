import React from 'react'

const Button = ({style,type}) => {
  return (
    <>
        <button type={type} className={style}>Submit</button>
    </>
  )
}

export default Button