import axios from "axios";
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
const AllProducts = () => {
    const [items, setitems] = useState([]);
    useEffect(() => {
        // Function to fetch data when the component mounts
         const fetchData = async () => {
            try {
                const res = await axios.get("http://127.0.0.1:8000/api/all");
                setitems(res.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }

        // Call the function
        fetchData();
    }, []); // The empty dependency array ensures the effect runs only once, similar to componentDidMount



    // function that delete product 

    const deleteProduct =  async (id) =>{
        await axios.delete("http://127.0.0.1:8000/api/product/" + id)
        .then(({ data }) => {
            console.log(data.message)
            // fetchData();
        }).catch(({ response: { data } }) => {
            console.log(data.message)
        })

    }
    return (


<div className="product-list">
{items.map((item) => (
  <div key={item.id} className="product-card">
    <h3>{item.title}</h3>
    <p className="description">{item.description}</p>
    <p className="description">{item.price} $ </p>
    <div className=" d-flex justify-content-end">
        <div><Link to={`/all/${item.id}`} className=" text-decoration-none bg-warning p-1 rounded-2 text-white">Update</Link></div>
        <button  className=" ms-2 text-decoration-none bg-danger p-1 rounded-2 text-white" onClick={()=>{deleteProduct(item.id)}} >Delete</button>
        
    </div>
  </div>
))}
</div>
    );
}

export default AllProducts;
