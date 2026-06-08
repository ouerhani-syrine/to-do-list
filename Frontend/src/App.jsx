import { createBrowserRouter, NavLink,useRouteError } from 'react-router-dom';
import { Outlet } from "react-router-dom";
import { RouterProvider } from 'react-router';
import { ToDo } from './Component/ToDo/ToDo'
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
      <nav className='relative bg-gray-800'>
        <NavLink to="/" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white">Home</NavLink>
        <NavLink to="/about" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white">About</NavLink>
        <NavLink to="/ToDo" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white">To do</NavLink>
      </nav>
      <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet"></link>
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
