import * as S from "./HeaderLogo.styles";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "./logo.svg";

export function HeaderLogo() {
  return (
    <S.LayoutMainLink>
      <Link to="/">
        <S.LogoWrap>
          <Logo />
        </S.LogoWrap>
      </Link>
    </S.LayoutMainLink>
  );
}
