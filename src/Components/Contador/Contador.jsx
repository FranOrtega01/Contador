import React from "react";
import './Contador.scss'

export function Contador({num}){
    return(
        <div className="contador">{num}</div>
    )
}