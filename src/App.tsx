import React from 'react';
import './scss/app.scss';
import {Header} from "./Components/Header";
import {Categories} from "./Components/Categories";
import {Sort} from "./Components/Sort";
import {PizzaBlock} from "./Components/PizzaBlock";
import items from "./assets/pizzas.json"

export type PizzaType = {
    id: string
    name: string
    price: number
}

function App() {
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
                        <div><h2 className="content__title">Все пиццы</h2></div>
                        <div className="content__items">
                            {
                                items.map(i => {
                                        return (
                                            <>
                                                <PizzaBlock id={i.id}
                                                            key={i.id}
                                                            title={i.title}
                                                            price={i.price}
                                                            imageUrl={i.imageUrl}
                                                            types={i.types}
                                                            sizes={i.sizes}
                                                            category={i.category}
                                                            rating={i.rating}
                                                />
                                            </>
                                        )
                                    }
                                )
                            }

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;


