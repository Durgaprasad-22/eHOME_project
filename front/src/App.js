// App.js

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome CSS
import './App.css'; // Import custom CSS for centering content
import { Route,Routes } from "react-router-dom";
import Contact from './/pages/Contact';
import Aboutus from './/pages/Aboutus';
import Cart from './/pages/Cart';
import Orderconfirmation from './/pages/Orderconfirmation';
import Product from './/pages/Product';
import Signup from './/pages/Signup';
import Login from './/pages/Login' ;
import Placeorder from './pages/Placeorder';
import Productlist from './pages/Productlist';


const App = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      
      <Routes>
        <Route path="/" element={<Productlist/>}/>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/about" element={<Aboutus/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/orderconfirmation" element={<Orderconfirmation/>}/>
        <Route path="/products/:id" element={<Product/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/placeorder" element={<Placeorder/>}/>
      </Routes>
      {/* Main content */}
      <main className="flex-grow-1 d-flex align-items-center">
        <div className="container text-center">
          <h1>Welcome to eHOME</h1>
          
        </div>
      </main>

      
    </div>
  );
}

export default App;
