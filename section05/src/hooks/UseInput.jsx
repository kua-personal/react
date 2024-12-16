// use 붙이면 커스텀 훅.
import {useState} from "react";

export function useInput() {
    const [input, setInput] = useState('')

    const onChange = (e) => {
        setInput(e.target.value)
    }

    return [input, onChange]
}

export default useInput