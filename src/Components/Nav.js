import React from 'react'
import {Link, useNavigate} from 'react-router-dom'



const Nav =()=>{

   const auth = localStorage.getItem('user')
   const navigate = useNavigate()

   const logout=()=>{

        localStorage.clear()
        navigate('/')
}

    return(
        <div>
            <img className='logo' src="https://www.seekpng.com/png/detail/428-4289671_logo-e-commerce-good-e-commerce-logo.png" alt="logo"/>
           { auth ? <ul className='nav-ul'>
                <li><Link to = '/'>Products</Link></li>
                <li><Link to = '/add'>Add Products</Link></li>
                <li><Link to = '/update'>Update Products</Link></li>
                <li><Link to = '/profile'>Profile</Link></li>
                <li><Link onClick={logout} to = '/signup'>Logout ({JSON.parse(auth).name})</Link></li>
                {/*<li>{auth? <Link onClick={logout} to = '/signup'>Logout</Link>:
                <Link to = '/signup'>Signup</Link>}</li>
    <li><Link to = '/login'>Login</Link></li>*/}

    
            </ul>
            :
            <ul className='nav-ul nav-right'>
                <li><Link to = '/signup'>Signup</Link></li>
                <li><Link to = '/login'>Login</Link></li>
            </ul>
}
        </div>
    )
}

export default Nav;