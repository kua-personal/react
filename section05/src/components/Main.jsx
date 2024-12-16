import "./Main.css"

const Main = () => {
    const user = {
        name: "홍길동",
        isLogin: true
    }

    if (user.isLogin) {
        return (
            <div className="logout">로그인</div>
        )
    } else {
        return (
            <div>로그아웃</div>
        )
    }
}

export default Main;