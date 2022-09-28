import React, {useState} from "react";
import {Categories} from "../Components/Categories";
import {Sort} from "../Components/Sort";
import PizzaSkeleton from "../Components/PizzaBlock/PizzaSkeleton";
import {PizzaBlock} from "../Components/PizzaBlock";
import {PizzaType} from "../App";

export const Home = () => {
    const [items, setItems] = useState<Array<PizzaType>>([])
    const [isLoading, setIsLoading] = useState(true)
    React.useEffect(() => {
        fetch("https://632af75f1090510116cd2931.mockapi.io/items")
            .then(res => res.json())
            .then((arr) => {
                setItems(arr)
                setIsLoading(false)
            })
        window.scrollTo(0, 0)
    }, [])
    return (
         <div className="wrapper">
            <div className="content">
                <div className="container">
                    <div className="content__top">
                        <div className="categories">
                            <Categories/>
                        </div>
                        <Sort/>
                    </div>
                    <div><h1 className="content__title">Все пиццы</h1></div>
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
    )
}