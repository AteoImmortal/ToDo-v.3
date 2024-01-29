import { Route, Routes } from 'react-router-dom';
import { Catalog } from '../modules/catalog';
import { Main } from '../modules/main';
import { Post } from '../modules/post';
import './App.css';
import { Layout } from './Layout';
import { Todo } from '../modules/todo';
import { TodoCountContext } from '../context/TodoCountContext';
import { useState } from 'react';

export const App = () => {

    const [countTodo, setCountTodo] = useState<number>(0);
    const [isLoading, setIsloading] = useState<boolean>(true);

    const onChangeCountTodo = (newCount: number) => {
        setCountTodo(newCount);
    }

    const onChangeLoding = (loading: boolean) => {
        setIsloading(loading)
    }

    return (
        <>
            <TodoCountContext.Provider value={{countTodo, onChangeCountTodo, isLoading, onChangeLoding }}>
                <Routes>
                    <Route path='/' element={<Layout />}>
                        <Route index element={<Main />}/>
                        <Route path='/post/*' element={<Post />}/>
                        <Route path='/catalog/*' element={<Catalog />}/>
                        <Route path='/todo' element={<Todo />}/>
                    </Route>
                </Routes>
            </TodoCountContext.Provider>

        </>
    )
}