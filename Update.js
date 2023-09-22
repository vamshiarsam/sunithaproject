

import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

export default function Update() {
  const { id } = useParams();

  const [itemname, setItemname] = useState('');
  const [des, setDes] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit =async (e) => {
    console.log("vamshiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii")
    console.log(itemname)
    console.log(price)
    console.log(des)
     let xx={
    itemname:itemname,
    price:price,
    des:des
  }
    e.preventDefault();
  
await axios.put(`http://localhost:8000/students/${id}`,xx)
console.log(id)
console.log(id)
  };
  // You can send a request to update the item with the new values here.
 

  const fetchData = async (id) => {
    try {
      console.log(id)
      const response = await axios.get(`http://localhost:8000/students/${id}`);
      const itemData = response.data; // Assuming your API response contains the item data.

      setItemname(itemData.itemname);
      setDes(itemData.des);
      setPrice(itemData.price);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
   
   

    fetchData(id);
  }, [id]);

  return (
    <>
    <div style={{background:"lightblue",border:"2px solid lightblue",}}>
     
      <div style={{ display: 'flex', margin: '50px',}}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label>Enter Item name</label>
              <br />
              <input
                type="text"
                style={{ width: '300px' }}
                value={itemname}
                onChange={(e) => setItemname(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label>Description</label>
              <br />
              <input
                type="text"
                style={{ width: '300px' }}
                value={des}
                onChange={(e) => setDes(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label>Enter Price</label>
              <br />
              <input
                type="number"
                style={{ width: '300px' }}
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>

           <Link to="/cards">
           <button type="submit" className="btn btn-primary">
              Submit
            </button></Link>
            <Link to="/cards"> 
            <button type="submit" style={{marginLeft:"5px"}}className="btn btn-primary">
              Cancel
            </button></Link> 
            

            <div style={{ background: "lightgray" }}  className="modal-footer" >
                                       

                                    </div>
          </form>
          {itemname}
        </div>
      </div>
    </div>
    
    </>
  );
}

