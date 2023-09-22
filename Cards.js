


import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Cards() {
  const [data, setData] = useState([]);
 

  const hello = async () => {
    await axios.get("http://localhost:8000/students").then((res) => setData(res.data));
  }

  const DeleteItem = async (id) => {
    await axios.delete(`http://localhost:8000/students/${id}`);
    
    hello();
  }

  useEffect(() => {
    hello();
  }, []);

  return (
    <>
      {/* <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Item Name</th>
            <th scope="col">Description</th>
            <th scope="col">Price</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((ele, index) => (
            <tr key={index}>
              <td scope="row">{ele.itemname}</td>
              <td>{ele.des}</td>
              <td>${ele.price}</td>
              <td>
              <Link to={`/update/${ele._id}`}><button>update</button></Link>
                <button onClick={() => DeleteItem(ele._id)} style={{ marginLeft: "10px" }}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>

        
      </table> */}
      <div   style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"10px",margin:"30px"}}>
        {data.map((ele)=>{
            return(
                <div className="card-body1" style={{padding:"20px", boxShadow:" 2px 2px 2px 2px lightblue"}}>
                            <h5 className="card-title1">{ele.itemname}</h5>
                            <p className="card-text1">{ele.des}</p>
                            <h6>${ele.price}</h6>
                                <Link to={`/update/${ele._id}`} ><button>update</button></Link>
                <button onClick={() => DeleteItem(ele._id)} style={{ marginLeft: "10px" ,marginBottom:"20px",backgroundColor:"green",color:"white"}}>Delete</button>
                        </div>
            )
        })}
                        
                        
    </div>
    </>
  );
}

