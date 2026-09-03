import style from "../styles/Panel.module.css";
import { ReactNode } from "react";

interface IPanelProps {
    children?: ReactNode;
}

export default function Panel(props:IPanelProps){
    return (
        <div className={style.panel}>
            {props.children}
        </div>
    )
}