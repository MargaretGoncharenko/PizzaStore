import React, {useState} from "react";

type SortProps = {}
export const Sort = (props: SortProps) => {
    const [open, setOpen] = useState<boolean>(false)
    const [selected, setSelected] = useState<number>(0)
    const sortingList: Array<string> = ["популярности", "цене", "алфавиту"]
    let checkedName = sortingList[selected]
    return (
        <div className="sort">
            <div className="sort__label" onClick={() => setOpen(!open)}>
                <img
                    width="20"
                    height="20"
                    src="https://icons.veryicon.com/png/o/miscellaneous/massager/drop-down-arrow-3.png"
                />
                <b>Сортировка по:</b>

                <span >{checkedName}</span>
            </div>
            {
                open && (
                    <div className="sort__popup">
                        <ul>
                            {
                                sortingList.map((s, index) => {
                                    return (
                                        <li
                                            onClick={() => {
                                                setSelected(index);
                                                setOpen(false)
                                            }}
                                            className={selected === index ? "active" : ""}
                                        >
                                            {s}
                                        </li>)
                                })
                            }
                        </ul>
                    </div>
                )
            }
        </div>
    )
}