import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Button from "./components/Button.jsx";
import NotFound from "./pages/404.jsx";
import Diary from "./pages/Diary.jsx";
import Home from "./pages/Home.jsx";
import New from "./pages/New.jsx";
import Header from "./components/Header.jsx";

// 1. "/" : 모든 일기를 조회하는 Home 페이지
// 2. "/new" .• 새로운 일기를 작성하는 New 페이지
// 3. "/diary" : 일기를 상세히 조회하는 Diary 페이지
function App() {
	const nav = useNavigate();

	return (
		<>
			<Header
			title={"Header"}
			leftChild={<Button text={"Left"} />}
			rightChild={<Button text={"Right"} />}
			/>

			<Button
				text={"123"}
				onClick={() => {
					console.log("123");
				}}
			/>
			<Button
				text={"123"}
				type={"POSITIVE"}
				onClick={() => {
					console.log("123");
				}}
			/>
			<Button
				text={"123"}
				type={"NEGATIVE"}
				onClick={() => {
					console.log("123");
				}}
			/>

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/new" element={<New />} />
				<Route path="/diary/:id" element={<Diary />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</>
	);
}

export default App;
