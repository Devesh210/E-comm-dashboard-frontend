import React,{useState,useEffect} from 'react';
import {useParams,useNavigate} from 'react-router-dom'

const UpdateProduct=()=>{
const[name,setName] = useState('');
const[price,setPrice] = useState('');
const[category,setCategory] = useState('');
const[company,setCompany] = useState('');
const params= useParams();
const navigate= useNavigate();


useEffect(()=>{
    console.warn(params)
    getProductDetails();
},[])

const getProductDetails = async () =>{
    console.warn(params)
    let result = await fetch(`http://localhost:5000/product/${params.id}`,{
    headers:{
        authorization:`bearer ${JSON.parse(localStorage.getItem("token"))}`
    }
    })
    result = await result.json()
    setName(result.name)
    setPrice(result.price)
    setCategory(result.category)
    setCompany(result.company)

}

const updateProduct= async ()=>{
    console.warn(name,price,category,company)
    let result = await fetch(`http://localhost:5000/product/${params.id}`,{
        method:'Put',
        body:JSON.stringify({name,price,category,company}),
        headers:{
            'Content-Type':'application/json',
            authorization:`bearer ${JSON.parse(localStorage.getItem("token"))}`
        }
    })
    result = await result.json()
    console.warn(result)
    navigate('/')


}

    return(
        <div className='product'>
        <h3>Update product</h3>
        <input type="text" onChange={(e)=>{setName(e.target.value)}} value={name} placeholder='Enter Product name' className='inputbox'/>
        <input type="text" onChange={(e)=>{setPrice(e.target.value)}} value={price} placeholder='Enter Product price' className='inputbox'/>

        <input type="text" onChange={(e)=>{setCategory(e.target.value)}} value={category} placeholder='Enter Product category' className='inputbox'/>

        <input type="text" onChange={(e)=>{setCompany(e.target.value)}} value={company} placeholder='Enter Product company' className='inputbox'/>

        <button className='appButton' onClick={updateProduct}>Update Product</button>
        </div>
    )
}

export default UpdateProduct;