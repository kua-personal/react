import './App.css'
import {useState} from "react";

function App() {
    const [count, setCount] = useState(0)
    const [light, setLight] = useState("OFF")

    return (
        <>
            <div>
                <h1>{light}</h1>
                <button onClick={()=>{
                    if (light === "OFF") {
                        setLight("ON")
                    } else {
                        setLight("OFF")
                    }
                }}>{light === "ON" ? "끄기" : "켜기"}</button>
            </div>
            <h1>{count}</h1>
            <button onClick={()=>{
                setCount(count + 1)
            }}>+</button>
        </>
    )
}

export default App
