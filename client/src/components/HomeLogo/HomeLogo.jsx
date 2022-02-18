import { LogoWrap, LogoImage } from "./HomeLogo.style";
import { Link } from "react-router-dom";

export default function HomeLogo() {
  return (
    <LogoWrap>
      <Link to="/">
        <LogoImage />
      </Link>
    </LogoWrap>
  );
}
