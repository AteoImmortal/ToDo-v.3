import { Task } from "../../models/Task"


type TodoItemProps = {
    todo: Task
    onDelete: (id:string) => void
    handleChangeTodo: (id:string, isDone: boolean) => void
}

export const TodoItem = ({ todo, onDelete, handleChangeTodo }: TodoItemProps) => {
    const { id, completed, title } = todo; 

    const handleDeleteClick = () => {
        onDelete(id)
    }

    const handleChange = (value:React.ChangeEvent<HTMLInputElement>) => {
        handleChangeTodo(id, value.target.checked)
    }
    
    return <li>
        <input type="checkbox" onChange={(value)=>{handleChange(value)}} defaultChecked={completed} />
        <span>{title}</span>
        <button onClick={handleDeleteClick}>delete</button>
    </li>
}
