import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './components/ErrorPage.jsx';
import Home from './components/Home.jsx';
import ListedBooks from './components/ListedBooks.jsx';
import PagesToRead from './components/PagesToRead.jsx';
import {  HelmetProvider } from 'react-helmet-async';
import Root from './components/Root.jsx';
import BookDetails from './components/BookDetails.jsx';
import Map from './components/Map.jsx';
import LogInGoogle from './components/LogInGoogle.jsx';
import Register from './components/Register.jsx';
import LogInGithub from './components/LogInGithub.jsx';
import LogInEmail from './components/LogInEmail.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root> ,
    errorElement: <ErrorPage></ErrorPage>,
    	children:[
        {
          path: "/" ,
          element: <Home></Home> ,
        },
        {
          path: "/listed" ,
          element: <ListedBooks></ListedBooks> ,
          loader: () => fetch('/books.json') 
        },
        {
          path: "/read" ,
          element:<PagesToRead></PagesToRead> ,
        },
        {
          path: "/read/:id" ,
          element:<BookDetails></BookDetails>,
          loader: () => fetch('./books.json'),
        },
        {
          path: "/map" ,
          element:<Map></Map>,
         
        },
        {

          path: "/loginEmail" ,
  
          element:<LogInEmail></LogInEmail>,

       },
        {

          path: "/loginGoogle" ,
  
          element:<LogInGoogle></LogInGoogle>,

       },
        {

          path: "/loginGoogle" ,
  
          element:<LogInGoogle></LogInGoogle>,

       },
        {
          path: "/loginGithub" ,
          element: <LogInGithub></LogInGithub>
       },
        {
          path: "/register" ,
          element:<Register></Register>,
       },
   ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
<HelmetProvider>


 <RouterProvider router={router} />


 </HelmetProvider>
  </StrictMode>,
)
