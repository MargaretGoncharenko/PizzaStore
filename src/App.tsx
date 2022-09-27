import React from 'react';
import './scss/app.scss';
import {Header} from "./Components/Header";
import {Home} from "./pages/Home";
import {NotFound} from "./pages/NotFound";
import {Route, Routes} from 'react-router-dom';
import {Cart} from "./pages/Cart";


export type PizzaType = {
    id: number
    price: number
    title: string
    imageUrl: string
    types: Array<number>
    sizes: Array<number>
    category: number
    rating: number
}

function App() {


    return (
        <div className="App">
            <div className="wrapper">
                <Header/>
                <Routes>
                    <Route path={"/"} element={<Home/>}/>
                    <Route path={"cart"} element={<Cart/>}/>
                    <Route path={"*"} element={<NotFound/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;


