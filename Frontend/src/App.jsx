import React from "react";
import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Photo from "./pages/Photo.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";


export default function App() {
    return (
        <Routes>
            <Route path='/home' element={<Home></Home>}/>
            <Route path='/photo' element={<Photo></Photo>}/>
            <Route path='/login' element={<Login></Login>}/>
            <Route path='/register' element={<Register></Register>}/>
        </Routes>
    );
}

