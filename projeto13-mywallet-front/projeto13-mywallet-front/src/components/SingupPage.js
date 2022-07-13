import { Link, useNavigate } from 'react-router-dom';
import Styled from 'styled-components';
import { useState, useContext } from 'react';
import axios from "axios";

import UserContext from '../contexts/UserContexts';
import Logo from './Logo';
import Form from "./Form";

export default function SignupPage() {
    // State Variables
    const [form, setForm] = useState({
        email: '',
        username: '',
        password: ''
    });
    const [confirmation, setConfirmation] = useState('');
    
    // Logic
    const { API } = useContext(UserContext);
   
    const updateForm = e => { 
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })}

    const navigate = useNavigate();

    const signup = e => {
        e.preventDefault();

        if(confirmation !== form.password) {
            alert("password must be the same in both fields");
            return;
        }
        console.log(form);
        const promise = axios.post(`http://localhost:5000/signup`, form)
        promise.then(r => {
            navigate("/");            
        })
        promise.catch(e => {
            alert("Invalid entry data");
            console.log(e);
        })
    }
    // UI
    return(
        <>
            <Logo />

            <Form>
                <input 
                    value={form.username} onChange={ e => updateForm(e)} 
                    name="username" type="text" placeholder="Username" ></input>
                    <input 
                    value={form.email} onChange={ e => updateForm(e)} 
                    name="email" type="email" placeholder="E-mail" ></input>
                    <input 
                    value={form.password} onChange={ e => updateForm(e)} 
                    name="password" type="password" placeholder="Password" ></input>
                   <input 
                    value={ confirmation } onChange={ e => setConfirmation(e.target.value) } 
                    name="confirmation" type="password" placeholder="Confirm your password" ></input>             
                    <button onClick={ e => signup(e) } >Signup</button>
            </Form>
            <Link to="/" style={{ textdecoration: "none" }}><P>Already has an account? Login here!</P></Link>
        </>
    );
}

const Space = Styled.div`
    height: 150px;
`;

const P = Styled.p`
    color: white;
    font-size: 14px;
    text-align: center;
    margin-top: 20px;
    text-decoration: underline;
`;