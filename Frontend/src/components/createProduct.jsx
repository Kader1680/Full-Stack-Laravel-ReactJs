
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function CreateProduct() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const navigate = useNavigate();
  const insertProduct = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('price', price);

    try {
      const response = await axios.post("http://127.0.0.1:8000/api/create", formData);
      console.log(response.data.message);
      navigate("/all")
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  }

  return (
    <div>
   

      <main class="main page__main">
    <form style={{ backgroundColor:"#1c2664" }} class="form main__form pe-5 ps-5"  onSubmit={insertProduct} method="POST">
    <h2 className=' text-white'>Create you Own Product</h2>
      
      <div class="form__linput">
        {/* <label class="form__label" for="fname">Products Title</label> */}
        <input style={{ backgroundClip:"#333333" }} class="mt-3 form__input border-0 rounded-2 " type="text" id="title" name="title" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title Products..."/>
      </div>
      <div class="form__linput">
        {/* <label class="form__label" for="lname">Price</label> */}
        <input class="mt-3 form__input rounded-2 " type="text" id="price" name="price" value={price} onChange={(e) => setPrice(e.target.value)}  placeholder="Price Products..."/>
      </div>
      <div class="form__linput">
        {/* <label class="form__label" for="subject">Description</label> */}
        <textarea class="mt-3 form__textarea rounded-2 mb-3"type="text" id="description" name="description" value={description} onChange={(e) => setDescription(e.target.value)}  placeholder="Description Products..."  rows="7"></textarea>
      </div>
      <button style={{ width:"100%" }} class="primary-btn form__btn p-3" type="submit">Submit</button>
    </form>
  </main>
    </div>
  );
}

export default CreateProduct;
