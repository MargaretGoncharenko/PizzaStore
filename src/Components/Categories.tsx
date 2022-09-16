import React, {useState} from "react";

export const Categories = () => {
    const [activeClass, setActiveClass] = useState(0)
    const onClickCategory = (index: number) => {
        setActiveClass(index)
    }
    const [categories] = useState([
        {id: 1, name: "Все"},
        {id: 2, name: "Мясные"},
        {id: 3, name: "Вегетарианская"},
        {id: 4, name: "Острые"},
        {id: 5, name: "Закрытые"},
    ])
    return (
        <ul>
            {
                categories.map(c => {
                    return (
                        <div key={c.id}>
                            <li onClick={() => onClickCategory(c.id)}
                                className={activeClass == c.id ? "active" : ""}>{c.name}</li>
                        </div>
                    )
                })
            }
        </ul>
    )
}