import { LayoutMainLink, LogoWrap, LogoImgae } from "./HomeLogo.style";
import { Link } from "react-router-dom";

import { ReactComponent as HomeLogoSVG } from "components/Icon/homelogo.svg";

export function HomeLogo() {
  return (
    <LayoutMainLink>
      <LogoWrap>
        <Link to="/">
          <HomeLogoSVG />
        </Link>
      </LogoWrap>
    </LayoutMainLink>
  );
}
