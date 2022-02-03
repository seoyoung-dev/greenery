import * as S from "./styles";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "./logo.svg";

function HeaderLogo() {
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

export default HeaderLogo;
