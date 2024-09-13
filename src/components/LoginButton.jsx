import React from 'react'

const LoginButton = ({ onClick, className, text, img }) => {
    return (
        <button type="button" onClick={onClick} className={className}>
            {img ? <img src="./images/구글사진.svg" alt="" className='w-auto' /> : null}{text}
        </button>
    )
}
export default LoginButton

// <img src="./images/구글사진.svg" alt="" />