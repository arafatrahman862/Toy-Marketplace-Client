import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './layout/Home.jsx';
import AllToy from './pages/AllToy.jsx';
import Blog from './pages/Blog.jsx';
import MyToy from './pages/MyToy.jsx';
import AddToy from './pages/AddToy.jsx';
import Category from './pages/Category.jsx';
import Header from './pages/Header.jsx';
import SingleToyShow from './pages/SingleToyShow.jsx';
import Error from './pages/Error.jsx';
import Login from './pages/Login.jsx';
import SingUp from './pages/SingUp.jsx';
import AuthProvider from './providers/AuthProvider.jsx';
import PrivateRoute from './routes/PrivateRoute.jsx';
import Update from './pages/Update.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path:"/",
        element: <Home></Home>
      },
{
  path:"/alltoy" ,
  element:<PrivateRoute><AllToy></AllToy></PrivateRoute>
  
},
{
  path:"/blog" ,
  element:<Blog></Blog>
},
{
  path:"/mytoy" ,
  element:<PrivateRoute><MyToy></MyToy></PrivateRoute>

},
{
  path:"/addtoy" ,
  element:<PrivateRoute><AddToy></AddToy></PrivateRoute>
},
{
  path:"/category",
  element:<Category></Category>
},
{
  path: "/header",
  element:<Header></Header>
},
{
  path: "/singleToyShow/:id",
  element: <PrivateRoute><SingleToyShow></SingleToyShow></PrivateRoute>,
  loader: ({params})=> fetch(`https://assingment11-server-arafatrahman862.vercel.app/alltoys/${params.id}`)
},
{
  path:"/login",
  element:<Login></Login>
},
{
  path:"/singup",
  element: <SingUp></SingUp>
},
{
  path:"/update/:id",
  element: <Update></Update>,
  loader: ({params}) => fetch(`https://assingment11-server-arafatrahman862.vercel.app/addtoys/${params.id}`)
}


    ]
  },
  {
    path:"*",
    element:<Error></Error>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <AuthProvider>
     <RouterProvider router={router} />
     </AuthProvider>
  </React.StrictMode>,
)
