import { useContext } from 'react'
import './Header.css'
import { TodoCountContext } from '../../../../../context/TodoCountContext'

export const Header = () => {
    const context = useContext(TodoCountContext)
    const count = context?.countTodo;
    const loading = context?.isLoading;

    return <div className="todo__header">
        {!loading && <h2>Task in progress: {count}</h2>}
    </div>
}