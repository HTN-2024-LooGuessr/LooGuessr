import React, {useState, useEffect} from "react";
import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Photo from "./pages/Photo.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import NavBar from "./NavBar/navbar.jsx";
import Profile from "./pages/Profile.jsx";
import Result from "./Result/Result.tsx";
import {useNavigate} from "react-router-dom";

export default function App() {
    async function login(uid = ""){
        localStorage.setItem("uid", uid);
    }

    async function logout() {
        localStorage.removeItem("uid")
    }

    if (localStorage.getItem("uid") == null && !window.location.pathname.includes("login")) {
        localStorage.setItem("points", "0");
        window.location.assign("/LooGuessr/login");
    }

    return (
        <>
            <Routes>
                <Route path='LooGuessr/' element={<Home uid={localStorage.getItem("uid")} logout={logout}></Home>}/>
                <Route path='LooGuessr/photo' element={<Photo uid={localStorage.getItem("uid")}></Photo>}/>
                <Route path='LooGuessr/login' element={<Login uid={localStorage.getItem("uid")} login={login}></Login>}/>
                <Route path='LooGuessr/register' element={<Register></Register>}/>
                <Route path='LooGuessr/profile' element={<Profile uid={localStorage.getItem("uid")} logout={logout}></Profile>}/>
                <Route path='LooGuessr/results' element={<Result></Result>}></Route>
            </Routes>
            <NavBar></NavBar>
        </>
    );
}

