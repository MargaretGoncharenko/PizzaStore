import React, {useState} from "react";

type PizzaBlockPropsType = {
    key: number
    id: number
    title: string
    price: number
    imageUrl: string
    types: number[]
    sizes: number[]
    category: number
    rating: number
}
export const PizzaBlock = (props: PizzaBlockPropsType) => {
    const [pizzaCount, setPizzaCount] = useState(0)
    const [activeType, setActiveType] = useState(0)

    function onclickTypeHandler(type: number) {
        setActiveType(type)
    }

    const [activeSize, setActiveSize] = useState(0)

    function onClickSizeHandler(index: number) {
        setActiveSize(index)
    }

    function onAddPizzaToOrderHandler() {
        setPizzaCount(pizzaCount + 1)

    }

    const typesNames = ["тонкое", "традиционное"]
    return (
        <div className={"pizza-block-wrapper"}>
        <div key={props.id} className="pizza-block">
            <img
                className="pizza-block__image"
                src={props.imageUrl}
                alt="Pizza"
            />
            <h4 className="pizza-block__title">{props.title}</h4>
            <div className="pizza-block__selector">
                <ul>
                    {
                        props.types.map(t => {
                            return (
                                <li onClick={() => onclickTypeHandler(t)}
                                    className={activeType === t ? "active" : ""}>{typesNames[t]}</li>
                            )
                        })
                    }
                </ul>
                <ul>
                    {
                        props.sizes.map((s, i) => {
                            return (
                                <li onClick={() => onClickSizeHandler(i)}
                                    className={activeSize === i ? "active" : ""}>{s} см</li>
                            )
                        })
                    }
                </ul>
            </div>
            <div className="pizza-block__bottom">
                <div className="pizza-block__price">{props.price} ₽</div>
                <button onClick={onAddPizzaToOrderHandler} className="button button--outline button--add">
                    <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                        d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                        fill="white"
                    />
                    </svg>
                    <span>Добавить</span>
                    <i>{pizzaCount}</i>
                </button>
            </div>
        </div>
        </div>
    )
}
