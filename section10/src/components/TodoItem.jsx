import "./TodoItem.css"
import {memo} from "react";

const TodoItem = ({id, isDone, content, date, onUpdate, onDelete}) => {

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
export default memo(TodoItem, (prevProps, nextProps) => {
    if (prevProps.id !== nextProps.id) return false
    if (prevProps.isDone !== nextProps.isDone) return false
    if (prevProps.content !== nextProps.content) return false
    if (prevProps.date !== nextProps.date) return false

    return true
})