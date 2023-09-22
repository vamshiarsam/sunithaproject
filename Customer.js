import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Addtocart from './Addtocart';
import {useCart} from "./Controldocs"

export default function Customer() {
    const [vamshi,setVamshi,increment,setIncrement]= useCart();
    const [itemvalue,setItemvalue] =useState("")

    console.log("ffffffffffffffffffffffffff",vamshi)
    const [data, setData] = useState([]);
    const [store,setStore] = useState([])
 console.log("storeeeeeeeeeeeeeeeeee",store)

const one=(ele)=>{
    setVamshi([...vamshi,ele])
    setIncrement(increment+1)
}

    const hello = async () => {
      await axios.get("http://localhost:8000/students").then((res) => {setData(res.data);
    console.log("lllllllllllllllllllllllllllll",res.data)});
    }
    useEffect(() => {
        hello();
        
      }, []);
  return (

    <>
    <div style={{textAlign:"right",marginTop:"30px",marginRight:"20px"}}>
    
   <label>choose items</label>
     <input styel={{margin:"10px"}}
    type="text" height="200px"
    value={itemvalue}
    onChange={(e) => setItemvalue(e.target.value)} 
  />
    </div>
        
 
      <div   style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"10px",margin:"30px"}}>
        {data?.filter((ele)=>ele.itemname.toLocaleLowerCase().includes(itemvalue.toLocaleLowerCase())).map((ele)=>{
            return(
                <div className="card-body1" style={{padding:"20px", boxShadow:" 2px 2px 2px 2px lightblue"}}>
                            <h5 className="card-title1">{ele.itemname}</h5>
                            <p className="card-text1">{ele.des}</p>
                            <h6>${ele.price}</h6>
                                <button onClick={()=>one(ele)} style={{background:"green",color:"white"}}>Addtocart</button>
                        </div>
            )
        })}

    </div>
    
    </>
  )
}
