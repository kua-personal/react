import {useRef, useState} from "react";

const Register = () => {
    const [input, setInput] = useState({
        name: "",
        birth: "",
        country: "",
        bio: ""
    })

    const countRef = useRef(0)
    const inputRef = useRef(null)

    const onChange = (e) => {
        countRef.current++
        console.log(countRef.current)
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = (e) => {
        if (input.name === "") {
            inputRef.current.focus()
        }
    }

    return (
        <>
            <div>
                <input ref={inputRef} name="name" onChange={onChange} placeholder={"이름"}/>
            </div>
            <div>
                <input name="birth" onChange={onChange} type="date"/>
            </div>
            
            <div>
                <select name="country" onChange={onChange}>
                    <option>선택</option>
                    <option value="kr">한국</option>
                    <option value="us">미국</option>
                    <option value="jp">일본</option>
                </select>
            </div>

            <div>
                <textarea name="bio" onChange={onChange} />
            </div>
            
            <button onClick={onSubmit}>제출</button>
        </>
    )
}

export default Register