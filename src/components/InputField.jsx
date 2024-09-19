import React, { useState } from 'react'

const InputField = ({ type, field, placeholder, onChange }) => {
    //logic
    // 입력값 부모컴포넌트에 넘겨주기
    // 1.input 태그에 onchange이벤트 연결
    // 2.연결된 함수에서 사용자 입력값 받아오기 예)console.log(event.target.value) 이벤트라는 객체 안에 타겟 안에 벨류를 불러오는것
    // 3.받아온 입력값 state에 저장 예) const [value, setValue] = useState('')
    // 4.state를 input의 value에 연결하기 
    // 5.부모에게 입력값 보내주기


    const [value, setValue] = useState('')

    const handleChange = (event) => {
        const { value } = event.target;
        setValue(value);
        onChange(value, field);
    }


    return (
        <input
            type={type}
            name={field}
            placeholder={placeholder}
            value={value}
            className='w-full bg-gray-800 rounded-lg p-5'
            onChange={handleChange}
        />
    )
}
export default InputField