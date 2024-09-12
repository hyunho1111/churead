import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import InputField from '../components/InputField';
import LoginButton from '../components/LoginButton';

const Login = () => {
    //logic
    const history = useNavigate()     //유즈네비게이트가 다른페이지를 이동하게해줌
    const goToHome = () => {
        history("/")
    }

    //view
    return (
        <div className='flex flex-col w-60 justify-center items-center gap-1 m-auto h-screen'>
            <h1>
                <img src="./images/logo.svg" alt="churead로고" />
            </h1>
            <h3 className='chureads text-white'>chureads에서 소통해보세요</h3>
            <InputField type="email" placeholder="Email" />
            <InputField type="password" placeholder="Password" />
            <LoginButton text='Login' className="w-full bg-white rounded-lg" />
            <h3 className='text-gray-400'>계정이 없으신가요?<Link to={"/"} className='text-blue-700'>가입하기</Link></h3>
            <h3 className='text-gray-500'>---------------or---------------</h3>
            <LoginButton text="continue with Google" className="text-white rounded-lg w-full h-20 border-solid border-2 border-gray-600" />
            {/* <h2>login</h2> */}
            {/* <button type='button' onClick={goToHome}>Home화면으로 이동</button> */}
            {/* <Link to={"/"} style={{ color: "red" }}> 홈화면으로 이동</Link> */}
        </div >
    )
}

export default Login