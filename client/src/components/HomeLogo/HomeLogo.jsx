import { LogoWrap, HeaderLogo, FormLogo } from "./HomeLogo.style";
import { Link } from "react-router-dom";

export default function HomeLogo({ id }) {
  return (
    <LogoWrap>
      <Link to="/">
        {id === "form" ? (
          <FormLogo src="/img/logo.svg" alt="home_logo" />
        ) : (
          <HeaderLogo alt="home_logo" />
        )}
      </Link>
    </LogoWrap>
  );
}
