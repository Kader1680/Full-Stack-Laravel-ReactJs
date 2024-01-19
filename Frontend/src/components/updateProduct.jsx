
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useParams} from "react-router-dom";
import { useNavigate } from "react-router-dom";


function UpdateProduct() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(()=>{
    fetchProducts();
  },[])

  const fetchProducts = async () =>{
    await axios.get(`http://127.0.0.1:8000/api/all/${id}`)
    .then(({data})=>{
      const { title, description, price } = data
      setTitle(title)
      setDescription(description)
      setPrice(price)
    })
  }
  const updateProduct = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('_method', 'PATCH')
    formData.append('title', title)
    formData.append('description', description)
    formData.append('price', price)

 
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/product/" + id, formData);
      console.log(response.data.message);
      navigate("/all")

    } catch (error) {
      console.error("Error submitting form:", error);
    }
  }

  return (
    <div>
   <h1 className=' text-center'>Update products now</h1>

      <main class="main page__main">
    <form class="form main__form"  onSubmit={updateProduct}>
      <div class="form__linput">
        <label class="form__label" for="title">Update Products Name</label>
        <input class="form__input" type="text" id="title" name="title" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title Products..."/>
      </div>
      <div class="form__linput">
        <label class="form__label" for="lname">Price</label>
        <input class="form__input" type="text" id="price" name="price" value={price} onChange={(e) => setPrice(e.target.value)}  placeholder="Price Products..."/>
      </div>
      <div class="form__linput">
        <label class="form__label" for="description">Update Description</label>
        <textarea class="form__textarea"type="text" id="description" name="description" value={description} onChange={(e) => setDescription(e.target.value)}  placeholder="Description Products..."  rows="7"></textarea>
      </div>
      <button class="primary-btn form__btn" type="submit">Submit</button>
    </form>
  </main>
    </div>
  );
}

export default UpdateProduct;
