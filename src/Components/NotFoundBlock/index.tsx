import React from "react";
import s from "./NotFound.module.scss"

export const NotFoundBlock = () => {
    return (
        <div className={s.root}>
            <span>🙁</span>
            <br/>
            <h1>Ничего не найдено</h1>
        </div>
    )
}