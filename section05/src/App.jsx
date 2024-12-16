import './App.css'
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer.jsx";
import Button from "./components/Button.jsx";

function App() {
    const buttonProps = {
        text: "메일",
        color: "red",
        a: 1,
        b: 2
    }
    return (
        <>
            {/*<Header/>*/}
            {/*<Main/>*/}
            {/*<Footer/>*/}
            <Button {...buttonProps}/>
            <Button text={"카페"}/>
            <Button text={"블로그"}>
                <div>자식 요소</div>
            </Button>
        </>
    )
}

export default App
