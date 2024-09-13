import React from 'react'

const InputField = ({ type, placeholder }) => {
    return (
        <input type={type} placeholder={placeholder}
            className='w-full bg-gray-800 rounded-lg p-5'
        />
    )
}
export default InputField