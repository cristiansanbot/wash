import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ErrorPage from "../ErrorPage/ErrorPage";
import SingIn from "../SingInScreen/SingIn";

function Layout(){
    return(
        <>
            <BrowserRouter>
                <main>
                    <Routes>
                        <Route exact path="/" element={<SingIn/>}/>
                        <Route path="*" element={<ErrorPage/>}/>
                    </Routes>
                </main>
            </BrowserRouter>
        </>
    )
}

export default Layout;