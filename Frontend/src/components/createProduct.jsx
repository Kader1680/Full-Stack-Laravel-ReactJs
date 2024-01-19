
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

function CreateProduct() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const insertProduct = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('price', price);

    try {
      const response = await axios.post("http://127.0.0.1:8000/api/create", formData);
      console.log(response.data.message);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  }

  return (
    <div>
   

      <main class="main page__main">
    <form class="form main__form"  onSubmit={insertProduct} method="POST">
      <div class="form__linput">
        <label class="form__label" for="fname">Products Name</label>
        <input class="form__input" type="text" id="title" name="title" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title Products..."/>
      </div>
      <div class="form__linput">
        <label class="form__label" for="lname">Price</label>
        <input class="form__input" type="text" id="price" name="price" value={price} onChange={(e) => setPrice(e.target.value)}  placeholder="Price Products..."/>
      </div>
      <div class="form__linput">
        <label class="form__label" for="subject">Description</label>
        <textarea class="form__textarea"type="text" id="description" name="description" value={description} onChange={(e) => setDescription(e.target.value)}  placeholder="Description Products..."  rows="7"></textarea>
      </div>
      <button class="primary-btn form__btn" type="submit">Submit</button>
    </form>
  </main>
    </div>
  );
}

export default CreateProduct;
