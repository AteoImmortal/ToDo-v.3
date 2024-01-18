import { useContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { Task, TaskDto } from "./models/Task";
import { TodoItem } from "./components/TodoItem";
import { TodoHeader } from "./components/TodoHeader";
import { todoDataMapper } from "./utils/mapper";
import { TodoCountContext } from "../../../../../context/TodoCountContext";
import { getTaskInProgress } from "./utils/helper";

export const Main = () => {

    const [data, setData] = useState<Task[]>([]);
    const context = useContext(TodoCountContext);
    const handelCountChange = context!.onChangeCountTodo;
    const handleChangeLoading = context!.onChangeLoding;
    const loading = context?.isLoading;


    const handleAddTodo = (inputValue: string) => {
        setData([...data, {
            id: uuidv4(),
            title: inputValue,
            completed: false,
            userId: uuidv4(),
        }])
    }

    const handleDelete = (idTodo: string) => {
        const filterData = data.filter(({id}) => id !== idTodo);
        setData(filterData)
    }

    const handleChangeTodo = (id: string, isDone: boolean) => {
        const mapData = data.map((todo) => {
            if(todo.id === id){
                todo.completed = isDone
            }
            return todo
        })
        setData(mapData)
    }

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then((serverData: TaskDto[]) => {
            const currentData = todoDataMapper(serverData);
            setData(currentData)
            
        })
    },[])

    useEffect(() =>{
        if(data.length !== 0 && loading) {
            handleChangeLoading(false)
        }
    },[data, loading])
    

    useEffect(() => {
        handelCountChange(getTaskInProgress(data))
    },[data])

    if(loading){
        return <h1>Loading....</h1>
    }

    return <div className="todo__main">
        <TodoHeader onAddTodo={handleAddTodo} />
        {data.length !== 0 ?
            <ul>
                {data.map((todo) => <TodoItem 
                                        key={todo.id} 
                                        todo={todo}
                                        onDelete={handleDelete}
                                        handleChangeTodo={handleChangeTodo}
                                    />)}
            </ul>:
            <h2>Список дел пуст</h2>
        }
    </div>
}