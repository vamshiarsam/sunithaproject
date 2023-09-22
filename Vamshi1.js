import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { Controldocs } from './Controldocs'
import Part2 from './Part2'
import Addcart1 from './Addcart1'

import Customer from './Customer'
import {ControldocsProvider} from './Controldocs'
import {useCart} from "./Controldocs"
import New from './New'
export default function Vamshi1() {
     
    
  return (
    <div>
        <ControldocsProvider>
        <BrowserRouter>
              <New></New>
        
            </BrowserRouter>
            </ControldocsProvider>
    </div>
  )
}
