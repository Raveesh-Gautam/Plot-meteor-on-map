import React from 'react'
import Main from './component/Main';
import Todo from './component/Todo';
import Clock from './component/Clock'
import FileSystem from './component/FileSystem' 
import Test from './../src/Test'
import {
    createBrowserRouter,
    RouterProvider,
    Route,
  } from "react-router-dom";
import Pagination from './Pagination/Pagination'   
import Home from './component/Home';
import Index from './store/Index';
import Callback from './component/Callback';
import HOC_comp from './component/HOC_comp';
import TodoRedux from './component/TodoRedux';
import Contacts from './component/Contacts';
import Blog from './Blog/Blog'; 
import UserBLog from './Blog/UserBLog';
import Geolocation from './Geolocation';

export default  createBrowserRouter([
  {
    path: "/", 
    element:  <Home /> ,
  },
  
  {
    path: "/geolocation",
    element: <Geolocation />  ,  
  },



   
]);
  

export const allRoutes = [
     "geolocation" ]