import {useState} from "react";

const Register = () => {
    const [name, setName] = useState("")
    const [birth, setBirth] = useState("")
    const [country, setContry] = useState("")
    const [bio, setBio] = useState("")

    const onChangeName = (e) => {
        setName(e.target.value)
    }

    const onChangeBirth = (e) => {
        setBirth(e.target.value)
    }

    const onChangeCountry = (e) => {
        setContry(e.target.value)
    }

    const onChangeBio = (e) => {
        setBio(e.target.value)
    }

    return (
        <>
            <div>
                <input onChange={onChangeName} placeholder={"이름"}/>
            </div>
            <div>
                <input onChange={onChangeBirth} type="date"/>
            </div>
            
            <div>
                <select onChange={onChangeCountry}>
                    <option>선택</option>
                    <option value="kr">한국</option>
                    <option value="us">미국</option>
                    <option value="jp">일본</option>
                </select>
            </div>

            <div>
                <textarea onChange={onChangeBio} />
            </div>
        </>
    )
}

export default Register