import React from "react"


import { createBrowserRouter } from "react-router";
import { Dashboard } from "../pages/Dashboard";
import { Board } from "../pages/Board";
import { Fruits } from "../pages/Fruits";
import { Ananas } from "../pages/Ananas";
import { Apple } from "../pages/Apple";
import { Banana } from "../pages/Banana";
import { IncHousePage } from "../pages/IncHousePage";

export const ROUTES = createBrowserRouter([
//     {path: '/', element: <Fruits />,
//         children:[
//          {path: '/Banana', element: <Banana />},
//         {path: '/Apple', element: <Apple />},
//         {path: '/ananas', element: <Ananas />},
// ]},
{
    path: '/', element: < IncHousePage/>,
},
    // {
    //     path: '/dashboard', element: <Dashboard />,
    // },
    // {
    //     path: '/board', element: <Board />,
    // },

    // {path: "*", element: <ErrorPage/>}
])