import "./TodoItem.css"
import {memo, useContext} from "react";
import {TodoDispatchContext} from "../App.jsx";

const TodoItem = ({id, isDone, content, date}) => {
    const {onUpdate, onDelete} = useContext(TodoDispatchContext)

    const onChangeCheckbox = () => {
        onUpdate(id)
    }

    const onClickDeleteButton = () => {
        onDelete(id)
    }

    return (
        <div className="TodoItem">
            <input onChange={onChangeCheckbox} checked={isDone} type="checkbox"/>
            <div className={"content"}>{content}</div>
            <div className={"date"}>{new Date(date).toLocaleDateString()}</div>
            <button onClick={onClickDeleteButton}>삭제</button>
        </div>
    )
}

// 고차 컴포넌트 (Higher Order Component)
export default memo(TodoItem)