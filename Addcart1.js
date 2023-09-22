import React, { useEffect, useState } from 'react'
import {useCart} from "./Controldocs"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export default function Addcart1() {
    const navigate=useNavigate()

    const [vamshi,setVamshi,increment,setIncrement,orderItem,setOrderItem]= useCart();

    const hello=(price)=>{
        setVamshi(vamshi.filter((ele)=>ele.price !=price))
setIncrement(increment-1)
    }


    
    useEffect(()=>{

    },[vamshi])

    const [allvalues,setAllvalues]=useState()
    const Money=()=>{
    
    }
    useEffect(()=>{
        Money()
    },[])
    
    const [placeorder,setPlaceorder]=useState([]);
    
    const [ordermoney,setOrdermoney]=useState();
    
    console.log(placeorder)
    const orderitem=(money)=>{
        let yy=money.map((ele)=>ele.price);
        let pp= money.map((ele)=>ele);
        console.log(pp)
        setPlaceorder(pp)
        // vamshi.map((ele)=>setPlaceorder(ele))
        let sum = 0;
        
        // iterate over each item in the array
        for (let i = 0; i < yy.length; i++ ) {
          sum += yy[i];
        }
        setOrdermoney(sum)
    }
    useEffect(()=>{
        orderitem(vamshi)
    },[vamshi])
    

//     const one=async(ele )=>{ 

      
//         let xx={
//             orderedItemname:ele.itemname,
//             orderedprice:ele.price,
//             ordereddes:ele.des,
//             date:new Date()
//         }
//       await axios.post("http://localhost:8000/orders",xx)
//     setOrderItem([...orderItem,ele])


//     navigate("/ordered")
// //     let xx=vamshi.filter((ele)=>ele.price !=ele.price)
// // setVamshi(xx)
//       setIncrement(increment-1)
//     }



////place order-------------------------------------------------------------


    const one=async( )=>{ 
// let arr=[];
//         placeorder.forEach((ele)=>{
//             let obj={
//                 orderedItemname:ele.itemname,
//                 orderedprice:ele.price,
//                 ordereddes:ele.des,
//                 date:new Date()
//             }
//            arr.push(obj)
//         })
//         alert("Vvvvvvvvvvvvvvvvvvvv")


let arr=[
    {
                        orderedItemname:"one",
                        orderedprice:"1",
                        ordereddes:"tt",
                        date:new Date()
    },
    {
        orderedItemname:"two",
        orderedprice:"1",
        ordereddes:"tt",
        date:new Date()
},
{
    orderedItemname:"three",
    orderedprice:"1",
    ordereddes:"tt",
    date:new Date()
}
]
       
     await axios.post("http://localhost:8000/orders",arr)
   // setOrderItem([...orderItem,ele])


    navigate("/ordered")
//     let xx=vamshi.filter((ele)=>ele.price !=ele.price)
// setVamshi(xx)
      setIncrement(increment-1)
    }




   
  return (
    <>

       <div   style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"10px",margin:"30px"}}>
        {vamshi?.length>0&&vamshi?.map((ele)=>{
            return(
                <div className="card-body1" style={{padding:"20px", boxShadow:" 2px 2px 2px 2px lightblue"}}>
                            <h5 className="card-title1">{ele.itemname}</h5>
                            <p className="card-text1">{ele.des}</p>
                            <h6>${ele.price}</h6>
                                   <button onClick={()=>hello(ele.price)} style={{background:"lightblue",cor:"white",borderRadius:"5px 5px"}}>Remove</button>
                        </div>
            )
        })}
      
      <button>{ordermoney}</button>
      <button onClick={()=>one()}style={{marginLeft:"5px",background:"green",borderRadius:"2px 2px "} } >order</button> 
{/*   
                                <button onClick={()=>one(ele)}style={{marginLeft:"5px",background:"green",borderRadius:"2px 2px "} } >order</button> */} 

    </div>
    </>
  )
}
