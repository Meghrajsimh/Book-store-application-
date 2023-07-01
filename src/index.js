import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter, Routes, Route
} from 'react-router-dom';
import { AppProvider } from './context.';
import './index.css';
import Home from './pages/Home/Home';
import About from "./pages/About/About";
import BookList from "./components/BookList/BookList";
import BookDetails from "./components/BookDetails/BookDetails";
import EditProfilePage from "./pages/EditProfile/EditProfilePage";
import Users from './pages/Users/Users';
import Register from './components/Register/Register';
import Login from './components/Login/Login'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppProvider>
    <BrowserRouter>
      <Routes>


      
           {/* <Route path="/"> */}
          <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route index element={<Login />} />
            <Route path="Register" element={<Register/>} />
     
        <Route path = "/" element = {<Home />}>
          <Route path = "about" element = {<About />} />
          <Route path="EditProfile" element={<EditProfilePage/>} />
          <Route path='Users' element={<Users/>}/>
          <Route path='Register' element={<Register/>}/>
          <Route path = "book" element = {<BookList />} />
          <Route path = "/book/:id" element = {<BookDetails />} />
          </Route>
      
      </Routes>
    </BrowserRouter>
  </AppProvider>
);

