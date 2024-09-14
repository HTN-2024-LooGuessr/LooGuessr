import React, { useEffect } from 'react';
import PropTypes from "prop-types";
import {useNavigate} from "react-router-dom";
import axios from "axios";


export default function Login(props) {
    const navigate = useNavigate();

    useEffect(() => {
        function handleSubmit(e) {
            const email = document.getElementById("email").value;
            const pw = document.getElementById("pw").value;
            console.log(email + " " + pw)
            e.preventDefault()
            axios.post("http://localhost:5555/user/login", {
                email: email,
                password: pw
            }).then((res) => {
                console.log(res.data.verdict)
                if (res.data.verdict) {
                    props.login(res.data._id)
                    navigate("/LooGuessr")
                }else {
                    alert("Incorrect password or email")
                }
            }).catch((error) => {
                console.log(error)
            })
        }

        document.getElementById("loginForm").addEventListener("submit", handleSubmit);
    }, [])

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