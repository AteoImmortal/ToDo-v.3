import { createContext } from "react"

type TodoCountContextType = {
    countTodo: number
    onChangeCountTodo: (newCount: number) => void
    isLoading: boolean
    onChangeLoding: (loading: boolean) => void
}

export const TodoCountContext = createContext<TodoCountContextType|null>(null);