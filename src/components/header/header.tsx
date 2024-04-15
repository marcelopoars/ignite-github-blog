import { Cover, HeaderContainer } from "./styles";

import logo from "../../assets/logo.svg";

export function Header() {
  return (
    <Cover>
      <HeaderContainer>
        <img src={logo} alt="" aria-hidden />
      </HeaderContainer>
    </Cover>
  );
}
