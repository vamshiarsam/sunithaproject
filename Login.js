import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useForm } from 'react-hook-form';
import axios from 'axios';

export default function Login() {
   const [firstname,setFirstname]=React.useState("")
   const [lastname,setLastname]=React.useState("")
   const [username,setUsername]=React.useState("")
   const [email,setEmail]=React.useState("")
  const [password,setPassword]=React.useState("")
   const [phone,setPhone]=React.useState("")
    const submit= async (e) => {

       e.preventDefault();
       if(lastname !==""&& lastname !=="undefined" || firstname !==""&& firstname !=="undefined" ||
       phone !==""&& phone !=="undefined" || phone !==""&& phone !=="undefined" || email !==""&& email !=="undefined"
       ){
        // console.log(lastname,firstname,phone,password,email)

        // const {,lastname,username,email,password,phone}=req.body

        let data={
            firstname:firstname,
            lastname:lastname,
            username:username,
            email:email,
            password:password,
            phone:phone,
        }

       await axios.post(" http://localhost:8000/users",data)
       }
   
    };

    return (
        <div style={{textAlign:"center"}}>
            <h1>Sign up</h1>
            <div style={{ textAlign:"center",justifyContent:"center",display:"flex"}}>
            <form  onSubmit={submit} >
                
              
                    <input type="text"  class="form-control mx-sm-3" value={firstname} placeholder='Enter Firstname'  style={{width:"250px"}}onChange={(e)=>setFirstname(e.target.value)} /><br></br>
        
                    <input type="text"  class="form-control mx-sm-3"  value={lastname}style={{width:"250px"}} placeholder='Enter Lastname' onChange={(e)=>setLastname(e.target.value)}/><br></br>
                    
                    <input type="text" class="form-control mx-sm-3"  value={username} style={{width:"250px"}} placeholder='Enter Username'onChange={(e)=>setUsername(e.target.value)}/><br></br>
                  
                    <input type="text"  class="form-control mx-sm-3" value={email} style={{width:"250px"}}placeholder='Enter Email' onChange={(e)=>setEmail(e.target.value)} /><br></br>
                  
                    <input type="password"  class="form-control mx-sm-3"  value={password}style={{width:"250px"}}  placeholder='Enter Password'onChange={(e)=>setPassword(e.target.value)}/><br></br>
                   
                    <input type="number"  class="form-control mx-sm-3"  value={phone}style={{width:"250px"}}  placeholder='Enter Mobile'onChange={(e)=>setPhone(e.target.value)}/><br></br>
             <button style={{background:"green",color:"white",borderRadius:"5px 5px"}}type="submit">signin</button>
            </form>
            </div>
        </div>
    );
}
