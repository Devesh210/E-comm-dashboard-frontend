import React, { useState,useEffect } from 'react'
import {useNavigate} from 'react-router-dom'


const Signup=()=>{
  
    const[name,setName]= useState('')
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const navigate = useNavigate();

    useEffect(()=>{
    const auth = localStorage.getItem('user');
        if(auth){
            navigate('/')
        }
    })



    const collectData= async()=>{
        console.warn(name,email,password)
        let result = await fetch('http://localhost:5000/register',{
            method:'post',
            body: JSON.stringify({name,email,password}),
            headers:{ 
                'Content-Type':'application/json'
            }
        })

        result = await result.json()
        console.warn(result)
        localStorage.setItem("user",JSON.stringify(result.result))
        localStorage.setItem("auth",JSON.stringify(result.auth))

        navigate('/')
        
    }
  
  
    return(
        <div className="register">
            <h3>Register</h3>
            <input type="text" className="inputbox" value={name} onChange={(e)=>{setName(e.target.value )}} placeholder="Enter Name" />
            <input type="text" className="inputbox" value={email} onChange={(e)=>{setEmail(e.target.value )}} placeholder="Enter Email" />
            <input type="text" className="inputbox" value={password} onChange={(e)=>{setPassword(e.target.value )}} placeholder="Enter Password" />
            <button onClick={collectData} type="button" className="appButton">Signup</button>
        </div>
    )
}

export default Signup;