import React, {createContext, useCallback, useMemo, useReducer, useRef} from 'react'
import './App.css'
import List from "./components/List.jsx";
import Editor from "./components/Editor.jsx";
import Header from "./components/Header.jsx";

const mockData = [
    {
        id: 1,
        isDone: false,
        content: "React 학습",
        date: new Date().getTime()
    }, {
        id: 2,
        isDone: false,
        content: "운동하기",
        date: new Date().getTime()
    }, {
        id: 3,
        isDone: false,
        content: "설거지 하기",
        date: new Date().getTime()
    }
]

function reducer(state, action) {
    switch (action.type) {
        case "CREATE":
            return [action.data, ...state]
        case "UPDATE":
            return state.map((item) => item.id === action.targetId ? {...item, isDone: !item.isDone} : item)
        case "DELETE":
            return state.filter((item) => item.id !== action.targetId)
        default:
            return state
    }
}

export const TodoStateContext = createContext()
export const TodoDispatchContext = createContext()

function App() {
    // const [todos, setTodos] = useState(mockData)
    const [todos, dispatch] = useReducer(reducer, mockData);
    const idRef = useRef(3)

    const onCreate = useCallback((content) => {
        dispatch({
            type: "CREATE",
            data: {
                id: (idRef.current++) + 1,
                isDone: false,
                content: content,
                date: new Date().getTime()
            }
        })
    }, [])

    const onUpdate = useCallback((targetId) => {
        dispatch({
            type: "UPDATE",
            targetId: targetId
        })
    }, [])

    const onDelete = useCallback((targetId) => {
        dispatch({
            type: "DELETE",
            targetId: targetId
        })
    }, []);

    const memoizedDispatch = useMemo(() => {
        return {onCreate, onUpdate, onDelete}
    }, []);

    return (
        <div className="App">
            <Header/>
            <TodoStateContext.Provider value={todos}>
                <TodoDispatchContext.Provider value={memoizedDispatch}>
                    <Editor/>
                    <List/>
                </TodoDispatchContext.Provider>
            </TodoStateContext.Provider>
        </div>
    )
}

export default App
