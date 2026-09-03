import style from "../styles/Footer.module.css";
import Image from "next/image";
import Text from "./Text";
import FlexContainer from "./FlexContainer";

import fullLogo from "../../media/FullLogo.png";
import vkLogo from "../../media/Vk.png";
import telegramLogo from "../../media/Telegram.png";
import partnershipLogo from "../../media/Partnership.png";
import Link from "./Link";

export default function Footer() {
  return (
    <div className={`${style.footer}`}>
      <FlexContainer
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Link link="/">
          <Image src={fullLogo} width={297} height={42} alt="{monnieArch}" />
        </Link>
        <FlexContainer
          gap="50px"
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Link link="/faq#delivery">
            <Text fontSize="30px" color="white">
              Доставка
            </Text>
          </Link>
          <Link link="/faq">
            <Text fontSize="30px" color="white">
              Информация
            </Text>
          </Link>
          <Link link="/faq#return">
            <Text fontSize="30px" color="white">
              Возврат
            </Text>
          </Link>
        </FlexContainer>
        <FlexContainer
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          gap="35px"
        >
          <Image src={telegramLogo} width={62} height={62} alt="{tg}" />
          <Image src={vkLogo} width={62} height={62} alt="{vk}" />
          <Image
            src={partnershipLogo}
            width={62}
            height={62}
            alt="{partnership}"
          />
        </FlexContainer>
      </FlexContainer>
    </div>
  );
}
