import Image from "next/image";
import style from "../styles/Card.module.css";
import { StaticImageData } from "next/image";
import Text from "./Text";
import FlexContainer from "./FlexContainer";

interface ICard {
    name?: string;
    price?: string;
    image?: string | StaticImageData;
    description?: string;
}

export default function Card({name = "No Name", price = "1990", image = "", description} : ICard){
    return (<div className={style.card}>
        <FlexContainer gap="40px">
            <Image src={image} alt="noimg" className={style.cardImage}/>
            <FlexContainer gap="20px">
                <Text fontWeight="400" fontSize="40px" letterSpacing="5%">{name}</Text>
                <Text fontWeight="300" fontSize="30px" letterSpacing="5%">{price+"p"}</Text>
            </FlexContainer>
        </FlexContainer>
    </div>);
}