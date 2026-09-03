import React, { ReactNode } from "react";
import style from "../styles/ImageWrapper.module.css"

interface IImageWrapper {
    children?: ReactNode;
}

export default function ImageWrapper({children} : IImageWrapper){
    return(<div className={style.imageWrapper}>
        {children}
    </div>)
}