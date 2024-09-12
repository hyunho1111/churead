import React from 'react'

const LoginButton = ({ onClick, className, text }) => {
    return (
        <button type="button" onClick={onClick} className={className}>{text}</button>
    )
}
// const InputField = ({ type, placeholder }) => {
//     return (
//         <input type={type} placeholder={placeholder}
//             className='w-full bg-gray-800 rounded-lg '
//         />
//     )
// }
export default LoginButton