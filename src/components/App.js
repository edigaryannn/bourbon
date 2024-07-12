import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './Header'
import Footer from './Footer'
import Home from '../pages/Home';
import Contacts from '../pages/Contacts';
import Order from '../pages/Order';
import Brands from '../pages/Brands'
import { useState } from 'react';
import { properties } from './Context';

import '../css/main.css';
import '../css/navbar.css';
import '../css/order.css';
import '../css/brands.css';

function App() {

    const [loader, setLoader] = useState(false);

    const elements = {
        loader, setLoader,
      }

        return(
            <><properties.Provider value={elements}>
            <Header />
            
                <Routes>

                    <Route index path='/' element={<Home />}></Route>
                    <Route path='/Contacts' element={<Contacts />}></Route>
                    <Route path='/Order' element={<Order />}></Route>
                    <Route path='/Brands/:brand' element={<Brands />}></Route>

                </Routes>
                <Footer /> 
                </properties.Provider>
            </>
        )

        
    }
    

export default App;