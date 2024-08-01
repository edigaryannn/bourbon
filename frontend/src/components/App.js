import { React, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Header from './Header.js';
import Footer from './Footer.js';
import Home from '../pages/Home.js';
import Contacts from '../pages/Contacts.js';
import Order from '../pages/Order.js';
import Brands from '../pages/Brands.js'
import Profile from '../pages/Profile.js';
import Single from '../pages/Single.js';
import { useState } from 'react';
import { properties } from './Context.js';
import useScrollToTop from './ScrollToTop.js';
import { Toaster } from "react-hot-toast";
import NotFoundPage from '../pages/404.js';
import { Loader } from "lucide-react";
import Favorites from '../pages/Favorites.js'

import '../css/main.css';
import '../css/navbar.css';
import '../css/order.css';
import '../css/brands.css';
import '../css/profile.css';
import '../css/single.css';
import '../css/stylePhone.css';

function App() {
    const [loading, setLoading] = useState(true);
    const [loader, setLoader] = useState(false);
    const location = useLocation();

    const elements = {
        loader, setLoader,
    }
    
    useScrollToTop();

    useEffect(() => {
        if (document.readyState === "complete") {
            setLoading(false);
        } else {
            const handleLoad = () => setLoading(false);
            window.addEventListener('load', handleLoad);
            return () => window.removeEventListener('load', handleLoad);
        }
    }, [location]);

    if (loading) {
        return  <main><div className='load'><Loader className='loader' /></div></main>;
    }

    

    return (
        <><properties.Provider value={elements}>
            <Header />

            <Routes>

                <Route index path='/' element={<Home />}></Route>
                <Route path='/Contacts' element={<Contacts />}></Route>
                <Route path='/Order' element={<Order />}></Route>
                <Route path='/Brands/:id' element={<Brands />}></Route>
                <Route path='/Profile' element={<Profile />}></Route>
                <Route path='/Single/:id' element={<Single />}></Route>
                <Route path='/*' element={<NotFoundPage />} />
                <Route path='/favorites' element={<Favorites />} />

            </Routes>
            <Footer />
        </properties.Provider>

            <Toaster />
        </>
    )


}


export default App;