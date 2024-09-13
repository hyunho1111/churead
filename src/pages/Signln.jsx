import React from 'react'
import { Link } from 'react-router-dom'
import InputField from '../components/InputField';
import LoginButton from '../components/LoginButton';

const Signln = () => {
    //logic

    //view
    return (
        <div className='flex flex-col justify-center items-center p-4'>
            <h1>
                <img src="./images/logo.svg" alt="churead로고" />
            </h1>
            <h3 className='chureads text-white p-5'>chureads에서 소통해보세요</h3>
            <form className='flex flex-col gap-2 w-full'>
                <InputField type="name" placeholder="Name" />
                <InputField type="email" placeholder="Email" />
                <InputField type="password" placeholder="Password" />
                <LoginButton text='Login' className="w-full bg-white rounded-lg p-5" />
            </form>
            <h3 className='text-gray-400 p-5'>계정이 있으신가요?<Link to={"/homes"} className='text-blue-700'>로그인</Link></h3>
            <h3 className='text-gray-500 p-5'>---------------or---------------</h3>
            <LoginButton text="continue with Google" className="text-white rounded-lg w-full h-20 border-solid border-2 border-gray-600 flex items-center justify-evenly" img="./images/구글사진.svg" />
            {/* <h2>login</h2> */}
            {/* <button type='button' onClick={goToHome}>Home화면으로 이동</button> */}
            {/* <Link to={"/"} style={{ color: "red" }}> 홈화면으로 이동</Link> */}
        </div >
    )
}

export default Signln