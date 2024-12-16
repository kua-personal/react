import {useState} from "react";

const Register = () => {
    const [input, setInput] = useState({
        name: "",
        birth: "",
        country: "",
        bio: ""
    })

    const onChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    return (
        <>
            <div>
                <input name="name" onChange={onChange} placeholder={"이름"}/>
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
        </>
    )
}

export default Register