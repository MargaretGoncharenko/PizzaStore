import React, {useState} from 'react';
import './scss/app.scss';
import {Header} from "./Components/Header";
import {Categories} from "./Components/Categories";
import {Sort} from "./Components/Sort";
import {PizzaBlock} from "./Components/PizzaBlock";
import {v1} from "uuid";


export type PizzaType = {
    id: string
    name: string
    price: number
}

function App() {
    let [pizzaList] = useState<Array<PizzaType>>([
            {id: v1(), name: "Мексиканская", price: 500},
            {id: v1(), name: "Гавайская", price: 800},
            {id: v1(), name: "Чизбургер-пицца", price: 700},
            {id: v1(), name: "Маргарита", price: 450},
            {id: v1(), name: "Чикен-карри", price: 550},
            {id: v1(), name: "Барбекю", price: 600},
            {id: v1(), name: "4 сезона", price: 400},
            {id: v1(), name: "Сырная", price: 400},
            {id: v1(), name: "Пепперони", price: 420},
        ]
    )

    return (
        <div className="App">
            <div className="wrapper">
                <Header/>
                <div className="content">
                    <div className="container">
                        <div className="content__top">
                            <div className="categories">
                                <Categories/>
                            </div>
                            <Sort/>
                        </div>
                        <h2 className="content__title">Все пиццы</h2>
                        <div className="content__items">
                            <PizzaBlock pizzaList={pizzaList}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;




