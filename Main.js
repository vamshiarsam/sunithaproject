import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Update from './Update'
import Cards from './Cards'
import Customer from './Customer'
import Addtocart from './Addtocart'

export default function Main({who}) {
  return ( 
    <>
     {who ?  <BrowserRouter>
         <Routes>

            <Route path="/update/:id" element={<Update></Update>}></Route>
            <Route path="/" element={<Cards></Cards>}></Route>
            <Route path="/cards" element={<Cards></Cards>}></Route>
         </Routes>
      </BrowserRouter> : <Customer></Customer>

// <BrowserRouter>
// <Routes>

//    <Route path="/customer" element={<Customer></Customer>}></Route>
//    <Route path="/" element={<Customer></Customer>}></Route>
//    {/* <Route path="/addtocart" element={<Addtocart></Addtocart>}></Route> */}
// </Routes>
// </BrowserRouter>
      
      }
     

    </>

// /<Customer></Customer>
  )
}
