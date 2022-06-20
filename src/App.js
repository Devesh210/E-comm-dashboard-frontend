import logo from './logo.svg';
import './App.css';
import Nav from './Components/Nav'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Footer from './Components/Footer';
import Signup from './Components/Signup';
import PrivateComponent from './Components/PrivateComponent';
import Login from './Components/Login';
import Addproduct from './Components/Addproduct'
import ProductList from './Components/ProductList';
import UpdateProduct from './Components/UpdateProduct';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route element = {<PrivateComponent/>} >
        <Route path = '/' element={<ProductList/>}/>
        <Route path = '/add' element={<Addproduct/>}/>
        <Route path = '/update/:id' element={<UpdateProduct/>}/>
        <Route path = '/logout' element={<h1>logout routing element</h1>}/>
        <Route path = '/profile' element={<h1>profile routing element</h1>}/>
        </Route>
        <Route path = '/signup' element={<Signup/>}/>
        <Route path = '/login' element={<Login/>}/>


      </Routes>
      <Footer/>

      </BrowserRouter>
    </div>
  );
}

export default App;
