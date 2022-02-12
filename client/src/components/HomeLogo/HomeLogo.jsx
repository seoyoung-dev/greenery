import { LogoWrap, LogoImage } from "./HomeLogo.style";
import { Link } from "react-router-dom";

export function HomeLogo() {
  return (
    <LogoWrap>
      <Link to="/">
        <LogoImage src="icon/homelogo.svg" alt="홈 로고" />
      </Link>
    </LogoWrap>
  );
}
