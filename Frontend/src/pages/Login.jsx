import React, { useEffect } from 'react';
import PropTypes from "prop-types";
import {useNavigate} from "react-router-dom";
import axios from "axios";


export default function Login(props) {
    const navigate = useNavigate();

    useEffect(() => {
        const navbar = document.getElementById("navbar");
        navbar.style.opacity = "0";
        navbar.style.visibility = "hidden";

        function handleSubmit(e) {
            const email = document.getElementById("email").value;
            const pw = document.getElementById("pw").value;
            console.log(email + " " + pw)
            e.preventDefault()
            axios.post("https://looguessr.onrender.com/user/login", {
                email: email,
                password: pw
            }).then((res) => {
                console.log(res.data.verdict)
                if (res.data.verdict) {
                    localStorage.setItem("username", email);
                    localStorage.setItem("uid", res.data._id);
                    navbar.style.opacity = "1";
                    navbar.style.visibility = "";
                    navigate("/")
                } else {
                    alert("Incorrect password or email")
                }
            }).catch((error) => {
                console.log(error)
            })
        }

        const uid = localStorage.getItem("uid");
        if (uid != null) {
            axios.post("https://looguessr.onrender.com/user/login", {
                uid: uid
            }).then(res => {
                if (res.data.verdict) localStorage.setItem("username", res.data.username);
                navigate("/");
            })
        } 

        document.getElementById("loginForm").addEventListener("submit", handleSubmit);
    }, [])

    if (localStorage.getItem("uid") == null && !window.location.pathname.includes("login")) {
        localStorage.setItem("points", "0");
        window.location.assign("/LooGuessr#/login");
    }
    
    return (
        <div>
            <form id='loginForm'>
                <label htmlFor={"email"}>email:</label><br/>
                <input type="text" id="email"/><br/>
                <label htmlFor={"pw"}>password:</label><br/>
                <input type="text" id="pw"/><br/>
                <input type="submit"/>
            </form>
        </div>
    );
}

Login.prototype = {
    login: PropTypes.func
}