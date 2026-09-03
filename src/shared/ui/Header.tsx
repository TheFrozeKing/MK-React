import FlexContainer from "./FlexContainer";
import Text from "./Text";
import style from "../styles/Header.module.css";
import Image from "next/image";
import logoImg from "../../media/Logo.png";
import cartImg from "../../media/Cart.png";
import accountImg from "../../media/Account.png";
import bannerImg from "../../media/Banner.png";
import ImageWrapper from "./ImageWrapper";
import Link from "./Link";

export default function Header() {
  return (
    <div>
      <div className={style.header}>
        <FlexContainer direction="row" justifyContent="space-between">
          <Link link="/faq">
            <Text color="black" fontSize="35px">
              FAQ
            </Text>
          </Link>
          <Link link="/">
            <Image src={logoImg} alt="{m}" width={55} height={55} />
          </Link>
          <FlexContainer direction="row" gap="20px">
            <Image src={cartImg} alt="cartImg" width={45} height={40} />
            <Image src={accountImg} alt="accountImg" width={40} height={40} />
          </FlexContainer>
        </FlexContainer>
      </div>
      <ImageWrapper>
        <Image
          src={bannerImg}
          alt="banner"
          fill
          // width={1945}
          // height={525}
          loading="eager"
        />
      </ImageWrapper>
    </div>
  );
}
