import React, { Suspense, lazy } from 'react';
import Books from "./Books";
import Header from "./Header";
import Footer from './Footer';
const AddEditBook = lazy(() => import('./AddEditBook'));

const MainContainer = () => {
    return (
        <div className="main-container h-screen bg-black relative">
            <Header/>
            <Books/>
            <Suspense fallback={<div>Loading...</div>}>
                <AddEditBook/>
            </Suspense>
            <Footer/>
        </div>
    )
}

export default MainContainer