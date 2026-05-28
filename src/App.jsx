import { createBrowserRouter, NavLink,useRouteError } from 'react-router-dom';
import { Outlet } from "react-router-dom";
import { RouterProvider } from 'react-router';
import { ToDo } from './navBar/ToDo/ToDo'
const router=createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <PageError />,
    children: [{
      path: "",
      element: <h1>Welcome</h1>
    },
      {
        path :"ToDo",
        element: (<div><ToDo /></div>)
    },
    {
      path: "/about",
      element: <div>Definition</div>
    }
  ]
  }
])
function PageError(){
  const error=useRouteError();
  return <>
  <h1>Page introuvable !</h1>
  <p>
    {error.statusText || error.message}
  </p>
  </>
}
function Root (){
  return <>
    <header>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/ToDo">To do</NavLink>
      </nav>
    </header>
    <div className="container my-4"><Outlet /></div>
  </>
}
function App() {
  return <>
    <RouterProvider router={router}/>
  </>
}
export default App
