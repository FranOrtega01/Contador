import React from "react";
import './Boton.scss'


export const Boton = ({btnText, handleClick}) => {
    return(
        <button className={btnText} onClick={handleClick}>{btnText}</button>
    )
}