import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import InputField from '../components/InputField';
import LoginButton from '../components/LoginButton';


//자식으로부터 받은 inputvalue의 값을 state에 저장
// 1.handleinputchange함수에서 date라는 inputvalue와
// field라는 해당 input의 필드값을 받아온다
// 2.새로운 변수 선언하여 inputvalue의 값을 넣어준다.
// 3. setformdata를 이용해서 새로운 변수의 값으로 변경한다.


const Login = () => {
    //logic
    const [email, setEmail] = useState("")
    console.log("🚀 ~ Login ~ email:", email)
    const [password, setPassword] = useState("")
    console.log("🚀 ~ Login ~ password:", password)



    const handleinputchange = (inputvalue, field) => {

        if (field === "email") {
            setEmail(inputvalue);
        } else {
            setPassword(inputvalue);
        };
    }


    const handleLogin = (event) => {
        event.preventDefault()
        console.log(email, password)
    }


    //view
    return (
        <div className='flex flex-col justify-center items-center p-4'>
            <h1>
                <img src="./images/logo.svg" alt="churead로고" />
            </h1>
            <h3 className='chureads text-white p-5'>chureads에서 소통해보세요</h3>
            <form className='flex flex-col gap-2 w-full' onSubmit={handleLogin}>
                <InputField type="email" field="email" placeholder="Email" onChange={handleinputchange} />
                <InputField type="password" field="password" placeholder="Password" onChange={handleinputchange} />
                <LoginButton type="submit" text='Login' className="w-full bg-white rounded-lg p-5" />
            </form>
            <h3 className='text-gray-400 p-5'>계정이 없으신가요?<Link to={"/signln"} className='text-blue-700'>가입하기</Link></h3>
            <h3 className='text-gray-500 p-5'>or</h3>
            <LoginButton text="continue with Google" className="text-white rounded-lg w-full h-20 border-solid border-2 border-gray-600 flex items-center justify-evenly" img="./images/구글사진.svg" />
            {/* <h2>login</h2> */}
            {/* <button type='button' onClick={goToHome}>Home화면으로 이동</button> */}
            {/* <Link to={"/"} style={{ color: "red" }}> 홈화면으로 이동</Link> */}
        </div >
    )
}

export default Login