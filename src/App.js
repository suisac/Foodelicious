import React from 'react';
import './index.css';
import Header from './components/Header';
import Body from './components/Body';
import About from './components/About';
import MenuCard from './components/Body/MenuCard';
import { createBrowserRouter, Outlet } from 'react-router-dom';

const App=()=>{
  return(
    <div className='font-sans'>
      <Header/>
      <Outlet/>
    </div>
  );
};

const AppRouter=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Body/>
      },
      {
        path:"/about",
        element:<About/>
      },
      ,
      {
        path:"/restaurant/:resId",
        element:<MenuCard/>
      }
    ]
  }
])


export default AppRouter;
