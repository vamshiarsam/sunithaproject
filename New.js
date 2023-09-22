import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import {ControldocsProvider} from './Controldocs'
import {useCart} from "./Controldocs"
import Customer from './Customer';
import Addcart1 from './Addcart1';
import Orderitem from './Orderitem';


// import OrderedItems from './OrderedItems';
export default function New() {
   
    const [vamshi,setVamshi,increment,setIncrement]= useCart();
    console.log("incresedddd22222222222222222222222222222222222222222",increment)
  return (
    <>

       <div className='header'>
                <div className='img'>
                    <div className='aaa'>
                        <img height={20} src="data:image/png;base64,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" ></img>
                    </div>
                    <div className='enva'>
                        <p><span style={{ color: "white", paddingleft: "20px", height: "30px" }}>Envato</span><span style={{ color: "green", height: "40px" }}>market</span></p>
                    </div>
                    <div>
                    
                    </div>
                </div>
                <div className='button1'>
                   <Link to="/ordered"><button style={{ color: "white", background: "green", textAlign:"center",height: "30px", width: "150px", borderRadius: "5px" }}>ordered items</button></Link>
                    <Link to="/Addcart1"> <button  style={{ color: "white", background: "green", textAlign:"center",height: "30px", width: "150px", borderRadius: "5px" }}>Add to cart-{increment}</button></Link>
                    </div>


            </div>
            <img src="https://img.freepik.com/premium-vector/trendy-minimalistic-food-delivery-service-online-food-order-application-banner-design-template_420121-273.jpg?size=626&ext=jpg"height="300px" width="100%"></img>
         
             <Routes>
               <Route path="/ordered" element={<Orderitem></Orderitem>}></Route>
              
                <Route path="/" element={<Customer></Customer>}></Route>
                <Route path="/Addcart1" element={<Addcart1></Addcart1>}></Route>
             </Routes>


             <section>
                <div className='gridcontainer'>
                    <div className='content'>
                        <h1 >Standard Features of our App</h1>
                    </div>
                    <div className='card1' >
                        <img className="card-img-top1" src="https://support.siddhiinfosoft.com/wp-content/uploads/2022/09/features3.png" alt="Card image cap"></img>
                        <div className="card-body1">
                            <h5 className="card-title1">Google Map APIs</h5>
                            <p className="card-text1">This feature will help restaurants, customers,
                                and drivers track locations and complete the food orders flawlessly.</p>

                        </div>
                    </div>
                    <div className="card1" >
                        <img className="card-img-top1" src="https://support.siddhiinfosoft.com/wp-content/uploads/2022/09/detailed_food_description.png" alt="Card image cap"></img>
                        <div className="card-body1">
                            <h5 className="card-title1">GLive Order and Delivery Tracking</h5>
                            <p className="card-text1">This feature allows the customer to track their food order live till it gets delivered to the doorstep.</p>

                        </div>
                    </div>
                    <div className="card1" >
                        <img className="card-img-top1" src="https://support.siddhiinfosoft.com/wp-content/uploads/2022/09/customize_addons.png" alt="Card image cap"></img>
                        <div className="card-body1">
                            <h5 className="card-title1">Numerous Categories</h5>
                            <p className="card-text">Easily categorize restaurant and food items with this feature and help customers to choose and satisfy a craving.</p>

                        </div>
                    </div>
                    <div className="card1" >
                        <img className="card-img-top1" src="https://support.siddhiinfosoft.com/wp-content/uploads/2022/09/features3.png" alt="Card image cap"></img>
                        <div className="card-body1">
                            <h5 className="card-title1">Order Invoice & History</h5>
                            <p className="card-text1">Customers can find and download invoices of current and previous food orders.</p>

                        </div>
                    </div>
                    <div className="card1" >
                        <img className="card-img-top1" src="https://support.siddhiinfosoft.com/wp-content/uploads/2022/09/features9.png" alt="Card image cap"></img>
                        <div className="card-body1">
                            <h5 className="card-title1">Popular Restaurants</h5>
                            <p className="card-text1">This feature will help customer to find the popular restaurant nearby their location.</p>

                        </div>
                    </div>
                    <div className="card1" >
                        <img className="card-img-top1" src="https://support.siddhiinfosoft.com/wp-content/uploads/2022/09/features8.png" alt="Card image cap"></img>
                        <div className="card-body1">
                            <h5 className="card-title1">Best Offers</h5>
                            <p className="card-text1">Restaurants can use this feature and provide the best offers on their dishes and attract more customers</p>

                        </div>
                    </div>

                </div>
            </section>
    </>
  )
}
