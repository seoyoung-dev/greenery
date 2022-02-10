import { Link } from "react-router-dom";

function Container() {
  return (
    <>
      <h1>Home</h1>
      <Link to="/signin">로그인</Link>
      <Link to="/signup">회원가입</Link>
    </>
  );
}

export default Container;
