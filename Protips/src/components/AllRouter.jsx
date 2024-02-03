import React from "react";
import {Route, Routes} from "react-router-dom"
import Home from "./home";
import Contacts from "./contact";
import Forms from "./form";


const AllRoutes=()=>{
    return (
        <>
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/contacts" element={<Contacts />}></Route>
            <Route path="/form" element={<Forms />}></Route>
        </Routes>
        
        </>
    )
}

export default AllRoutes;