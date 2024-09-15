import React, {useState, useEffect} from "react";
import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Photo from "./pages/Photo.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import NavBar from "./NavBar/navbar.jsx";
import Profile from "./pages/Profile.jsx";
import {useNavigate} from "react-router-dom";
import { useState, useEffect } from "react";

export default function App() {
    const [uid, setUid] = useState("");

    useEffect(() => {
        if (localStorage.getItem("uid") !== null) {
            setUid(localStorage.getItem("uid"))
        }
    }, [])

    async function login(uid = ""){
        setUid(uid)
        localStorage.setItem("uid", uid);
    }

    async function logout() {
        setUid("")
        localStorage.removeItem("uid")
    }

    return (
        <>
            <Routes>
                <Route path='LooGuessr/' element={<Home uid={uid} logout={logout}></Home>}/>
                <Route path='LooGuessr/photo' element={<Photo uid={uid}></Photo>}/>
                <Route path='LooGuessr/login' element={<Login uid={uid} login={login}></Login>}/>
                <Route path='LooGuessr/register' element={<Register></Register>}/>
                <Route path='LooGuessr/profile' element={<Profile uid={uid} logout={logout}></Profile>}/>
            </Routes>
            <NavBar></NavBar>
        </>
    );
}

