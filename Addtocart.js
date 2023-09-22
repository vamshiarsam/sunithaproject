import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Addtocart({store}) {
  
  return (
    <>
    <h1>cancelll orderrrrrrrrrr</h1>
       <div   style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"10px",margin:"30px"}}>
        {store?.map((ele)=>{
            return(
                <div className="card-body1" style={{padding:"20px", boxShadow:" 2px 2px 2px 2px lightblue"}}>
                            <h5 className="card-title1">{ele.itemname}</h5>
                            <p className="card-text1">{ele.des}</p>
                            <h6>${ele.price}</h6>
                                <Link to={`/update/${ele._id}`} ><button>Cancel</button></Link>
                <button  style={{ marginLeft: "10px" ,marginBottom:"20px",backgroundColor:"green",color:"white"}} >Order</button>
                        </div>
            )
        })}
           </div>             
                        
    </>
  )
}
