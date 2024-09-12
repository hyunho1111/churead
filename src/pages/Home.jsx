import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Home = () => {
    //logic
    const history2 = useNavigate()
    const goToLogin = () => {
        history2("/login")
    }

    //view
    return (
        <div className='text-red-500'> Home
            <button type="button" onClick={goToLogin}>login화면으로 이동</button>
            <Link to={"/login"}>로그인 화면으로 이동 </Link>
        </div>
    )
}

export default Home