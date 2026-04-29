import React from "react"

import { Link, Outlet } from "react-router"

export const Fruits = () => {
    return(<section>
        <h1>Fruits</h1>
        <ul>
            <li><Link to="/banana">Banana</Link></li>
            <li><Link to="/apple">Apple</Link></li>
            <li><Link to="/ananas">Ananas</Link></li>
        </ul>

{/* outlet - сюда подгружаюься дочерние элементы страницы фруктов */}
        <Outlet/>
    </section>)
}