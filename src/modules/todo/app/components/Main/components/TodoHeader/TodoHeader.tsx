import { useRef } from "react";

type  TodoHeaderProps = {
    onAddTodo: (value: string) => void;
}

export const TodoHeader = ({ onAddTodo }: TodoHeaderProps) => {
    const inputRef = useRef<HTMLInputElement>(null);
    
    const handleAddTodo = () => {
        const input = inputRef.current;
        onAddTodo(input!.value);
        input!.value = ''
    }

    return <>
        <input ref={inputRef} type="text" name="todo"/>
        <button onClick={handleAddTodo}>add todo</button>
    </>
}