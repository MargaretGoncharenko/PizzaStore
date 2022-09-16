import React, {useState} from "react";

export const Categories = () => {
    const [activeClass, setActiveClass] = useState(0)
    const onClickCategory = (index: number) => {
        setActiveClass(index)
    }
    const categories = ["Все", "Мясные", "Вегетарианская", "Острые", "Закрытые"]
    return (
        <ul>
            {
                categories.map((name, index) => {
                    return (
                        <div key={index}>
                            <li onClick={() => onClickCategory(index)} className={activeClass == index ? "active" : ""}>
                                {name}
                            </li>
                        </div>
                    )
                })
            }
        </ul>
    )
}