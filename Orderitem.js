import React, { useEffect, useState } from 'react'
import {useCart} from "./Controldocs"
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
    
export default function Orderitem() {
    const [vamshi,setVamshi,increment,setIncrement,orderItem,setOrderItem]= useCart();

    const [storeorder,setStoreorder]=useState([]);
     const hello=async()=>{
      axios.get("http://localhost:8000/orders").then((res)=>setStoreorder(res.data))
     }
    useEffect(()=>{
      hello()
    },[])
  
  return (
    <>
      <h2 style={{textAlign:"center"}}>Order details here</h2>
     
     <div   style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"10px",margin:"30px"}}>
        {storeorder?.map((ele)=>{
            return(
                <div className="card-body1" style={{padding:"20px", boxShadow:" 2px 2px 2px 2px lightblue"}}>
                  <h6>orderId-{ele._id}</h6>
                            <h5 className="card-title1">{ele.orderedItemname}</h5>
                            <p className="card-text1">{ele.ordereddes}</p>
                            <h6>${ele.orderedprice}</h6>
                            <h6>{ele.date}</h6>
                               
                        </div>
            )
        })}

    </div>
    </>
  )
}
