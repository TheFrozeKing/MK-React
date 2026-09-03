import { ReactNode } from "react";
import style from "../styles/Link.module.css"

interface ILinkProps{
    link: string,
    children?: ReactNode,
}

export default function Link({link, children = link}: ILinkProps){
    
    return(
        <a className={style.link} href={link}>{children}</a>
    );
}