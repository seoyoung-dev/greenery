import { LogoWrap, LogoImage } from "./HomeLogo.style";
import { Link } from "react-router-dom";

export default function HomeLogo() {
  return (
    <LogoWrap>
      <Link to="/">
<<<<<<< HEAD
        <LogoImage src="/icon/homelogo.svg" alt="qwe" />
=======
        <LogoImage src="icon/homelogo.svg" alt="홈 로고" />
>>>>>>> 45093e8058b7990ce35cbe64244d9b8b560d0809
      </Link>
    </LogoWrap>
  );
}
