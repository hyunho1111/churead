import React from 'react'

const InputField = ({ type, placeholder }) => {
    return (
        <input type={type} placeholder={placeholder}
            className='w-full bg-gray-800 rounded-lg '
        />
    )
}
export default InputField