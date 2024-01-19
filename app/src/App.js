import AllProducts from './components/allProducts';
import logo from './logo.svg';
import "./App.css"

import React from 'react';
import CreateProduct from './components/createProduct';
import Navabar from './components/navabar';
import { BrowserRouter, Routes, Route, Router} from 'react-router-dom';
import UpdateProduct from './components/updateProduct';
import Register from './components/Register';
import Login from './components/login';
function App() {
  return (
    <BrowserRouter>
    <div class="app">
        <Navabar />
        <Routes>
                <Route path="/" element={<Register  />} />
                <Route path="/login" element={<Login  />} />
                <Route path="/all" element={<AllProducts  />} />
                <Route path="/create" element={<CreateProduct />} />
                <Route path="/all/:id" element={<UpdateProduct />} />
              
            
        </Routes>
    </div>
</BrowserRouter>

    
  );
}

export default App;
