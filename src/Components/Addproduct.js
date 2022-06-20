import React,{useState} from 'react';

const Addproduct=()=>{
const[name,setName] = useState('');
const[price,setPrice] = useState('');
const[category,setCategory] = useState('');
const[company,setCompany] = useState('');
const[error,setError]=useState(false)

const addproduct= async ()=>{

    console.warn(!name);
    if(!name || !price||!category||!company)
    {
        setError(true)
    return false;
    }

    console.warn(name,price,category,company)
    
    const userId = JSON.parse(localStorage.getItem('user'))
    console.warn(userId._id)
    let result = await fetch("http://localhost:5000/add-product",{
        method: "post",
        body: JSON.stringify({name,price,category,company}),
        headers:{
            "Content-Type":"application/json",
            authorization:`bearer ${JSON.parse(localStorage.getItem("token"))}`
            
        }
    });

    result = await result.json();
    console.warn(result)

}

    return(
        <div className='product'>
        <h3>Add product</h3>
        <input type="text" onChange={(e)=>{setName(e.target.value)}} value={name} placeholder='Enter Product name' className='inputbox'/>
       {error && !name && <span className='invalid-input'>Enter valid name</span>}
        <input type="text" onChange={(e)=>{setPrice(e.target.value)}} value={price} placeholder='Enter Product price' className='inputbox'/>
       {error && !price && <span className='invalid-input'>Enter valid price</span>}

        <input type="text" onChange={(e)=>{setCategory(e.target.value)}} value={category} placeholder='Enter Product category' className='inputbox'/>
       {error && !category && <span className='invalid-input'>Enter valid category</span>}

        <input type="text" onChange={(e)=>{setCompany(e.target.value)}} value={company} placeholder='Enter Product company' className='inputbox'/>
       {error && !company && <span className='invalid-input'>Enter valid company</span>}

        <button className='appButton' onClick={addproduct}>Add Product</button>
        </div>
    )
}

export default Addproduct;