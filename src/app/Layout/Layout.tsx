import { NavLink, Outlet } from "react-router-dom"
import { TodoCountContext } from "../../context/TodoCountContext"
import { useContext } from "react"
import './Layout.css'

export const Layout = () => {
    const context = useContext(TodoCountContext)
    const count = context?.countTodo


    return (
        <>
            <header className='header'>
                <nav className='nav'>
                    <ul className='nav__items'>
                        <li className='nav__item'><NavLink to="/">Главная</NavLink></li>
                        <li className='nav__item'><NavLink to="/post">Блог</NavLink></li>
                        <li className='nav__item'><NavLink to="/catalog">Каталог</NavLink></li>
                        <li className='nav__item'><NavLink to='/todo'>Список задач: {count}</NavLink></li>
                    </ul>
                </nav>
            </header>
                <main className="main">
                    <div className="container">
                        <Outlet />
                    </div>
                </main>
                <footer className="footer">
                    <div className="container">

                    </div>
                </footer>
        </>
    )
}