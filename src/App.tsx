import React, {useState} from 'react';
import './scss/app.scss';
import {Header} from "./Components/Header";
import {Categories} from "./Components/Categories";
import {Sort} from "./Components/Sort";
import {PizzaBlock} from "./Components/PizzaBlock";
import PizzaSkeleton from "./Components/PizzaBlock/PizzaSkeleton";


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
    const [items, setItems] = useState<Array<PizzaType>>([])
    const [isLoading, setIsLoading] = useState(true)
    React.useEffect(() => {
        fetch("https://632af75f1090510116cd2931.mockapi.io/items")
            .then(res => res.json())
            .then((arr) => {
                setItems(arr)
                setIsLoading(false)
            })
    }, [])

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
                                isLoading
                                    ? [...new Array(6)].map((_, index) => <PizzaSkeleton key={index}/>)
                                    : items.map(i => {
                                            return (
                                                <>
                                                    <PizzaBlock
                                                        id={i.id}
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


