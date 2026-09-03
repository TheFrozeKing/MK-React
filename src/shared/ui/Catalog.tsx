import FlexContainer from "./FlexContainer";
import Card from "./Card";
import style from "../styles/Catalog.module.css";
import SearchBar from "./SearchBar";
import Text from "./Text";

import Shirt1 from "@/src/media/shirt-1.png";
import Shirt2 from "@/src/media/shirt-2.png";

export default function Catalog() {
  return (
    <div>
      <FlexContainer gap="40px">
        <Text letterSpacing="5%" fontSize="55px">
          OUR COLLECTION
        </Text>
        <FlexContainer gap="110px">
          <SearchBar></SearchBar>
          <FlexContainer gap="100px" direction="row" wrap="wrap">
            <Card image={Shirt1} name="RIP Matsulove" price="1990"></Card>
            <Card image={Shirt2} name="Feel the vibe" price="1990"></Card>
            <Card image={Shirt1} name="RIP Matsulove" price="1990"></Card>
            <Card image={Shirt1} name="RIP Matsulove" price="1990"></Card>
            <Card image={Shirt2} name="Feel the vibe" price="1990"></Card>
            <Card image={Shirt2} name="Feel the vibe" price="1990"></Card>
          </FlexContainer>
        </FlexContainer>
      </FlexContainer>
    </div>
  );
}
