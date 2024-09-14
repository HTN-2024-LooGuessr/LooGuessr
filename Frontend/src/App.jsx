import React from "react";
import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Photo from "./pages/Photo.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import NavBar from "./NavBar/navbar.jsx";


export default function App() {
    return (
        <>
            <Routes>
                <Route path='LooGuessr/' element={<Home></Home>}/>
                <Route path='LooGuessr/photo' element={<Photo></Photo>}/>
                <Route path='LooGuessr/login' element={<Login></Login>}/>
                <Route path='LooGuessr/register' element={<Register></Register>}/>
                <Route path='LooGuessr/profile'/>
            </Routes>
            <NavBar></NavBar>
        </>
    );
}

