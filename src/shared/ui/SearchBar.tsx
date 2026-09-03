import style from "../styles/SearchBar.module.css";
import FlexContainer from "./FlexContainer";
import Image from "next/image";
import SearchIcon from "@/src/media/Search.png";
import Text from "./Text";
import Empty from "./Empty";
import Input from "./Input";

export default function SearchBar() {
  return (
    <div className={style.searchBar}>
        <Image src={SearchIcon} alt="icon" width={64} height={64} />
        <Input fontSize="25px" letterSpacing="5%" placeholder="SEARCH"></Input>
        <Empty width="64px"/>
      <div></div>
    </div>
  );
}
