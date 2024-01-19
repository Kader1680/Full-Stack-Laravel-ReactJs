import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Dashboard() {
  const [Data, setData] = useState([]);  
  useEffect(() => {
    const dataDashboard = async () => {
      const response = await axios.get("http://127.0.0.1:8000/api/dashboard")
    try {
        console.log(response.data)
        setData(response.data)
    } catch (error) {
      console.log(error)
    }
    }
    dataDashboard ()
  }, []);


  const [countProduct, setcountProduct] = useState([]);  
  useEffect(() => {
    const dataDashboard = async () => {
      const response = await axios.get("http://127.0.0.1:8000/api/dashboard/count")
    try {
        console.log(response.data)
        setcountProduct(response.data)
    } catch (error) {
      console.log(error)
    }
    }
    dataDashboard ()
  }, []);



  const [countClient, setcountClient] = useState([]);  
  useEffect(() => {
    const dataDashboard = async () => {
      const response = await axios.get("http://127.0.0.1:8000/api/dashboard/countClient")
    try {
        console.log(response.data)
        setcountClient(response.data)
    } catch (error) {
      console.log(error)
    }
    }
    dataDashboard ()
  }, []);


  const [max, setmax] = useState([]);  
  useEffect(() => {
    const dataDashboard = async () => {
      const response = await axios.get("http://127.0.0.1:8000/api/dashboard/max")
    try {
        console.log(response.data)
        setmax(response.data)
    } catch (error) {
      console.log(error)
    }
    }
    dataDashboard ()
  }, []);


  const [min, setmin] = useState([]);  
  useEffect(() => {
    const dataDashboard = async () => {
      const response = await axios.get("http://127.0.0.1:8000/api/dashboard/min")
    try {
        console.log(response.data)
        setmin(response.data)
    } catch (error) {
      console.log(error)
    }
    }
    dataDashboard ()
  }, []);

  return (


    <div className='dashboard d-md-flex mt-4'>
          <main className=' rounded-4'>
            <ul className='  list-unstyled'>   
              <li className='ps-2 mt-3 mb-3'><Link className='text-white text-decoration-none ms'><i  class="fa-solid fa-house p-2 rounded-3 me-2"></i> Admin Panel</Link></li>
              <li className='ps-2 mb-3'><Link className='text-white text-decoration-none'><i class="fa-solid fa-table p-2 rounded-3 me-2"></i>Tables</Link></li>
              <li className='ps-2 mb-3'><Link className='text-white text-decoration-none'><i class="fa-solid  fa-house p-2 rounded-3 me-2"></i>Static</Link></li>
              <li className='ps-2 mb-3'><Link className='text-white text-decoration-none'><i class="fa-solid fa-table  p-2 rounded-3 me-2"></i>Logout</Link></li>
            </ul>
          </main>
      
    
      <div className='Table' style={{ msOverflowX:"auto"  }}>

        <div className='adminPanel'>
            <div className='rounded-4 d-flex align-items-center justify-content-center'>
              Total Products  ({countProduct })
            </div>
            <div className='rounded-4 d-flex align-items-center justify-content-center'>
              Total Clients ({ countClient })
            </div>
            <div className='rounded-4 d-flex align-items-center justify-content-center'>
              Height Price ({ max }) $
            </div>
            <div className='rounded-4 d-flex align-items-center justify-content-center'>
              Low Price  ({ min }) $
            </div>
        </div>
        
          <table>
                <tr >
                  <th>Name</th>
                  <th>Email</th>
                  <th>Address</th>
                  <th>City</th>
              
                </tr>
        
                {
                  
                  Data.map(item=>(
                    <tr >
                      <td className='text-white bg-transparent' >{item.name}</td>
                      <td className='text-white  bg-transparent ms-5'>{item.email}</td>
                      <td className='text-white  bg-transparent ms-5'>{item.city}</td>
                      <td className='text-white  bg-transparent ms-5'  >{item.address}</td>
                    </tr>

                  ))
                  
                }

                
        
            </table>
        </div>
     </div>


    )
}

export default Dashboard