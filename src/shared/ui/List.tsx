import { ReactNode, Children } from "react";
import style from "../styles/List.module.css";

interface IListProps{
   children: ReactNode, 
   type?: "circle" | "disc" | "square"
}

export default function List({children, type = "circle"} : IListProps){
    
    return(
        <ul className={style.list} style={{listStyleType:type}}>
            {Children.map(children, child =>
                <li>
                    {child}
                </li>
            )}
        </ul>
    )
}