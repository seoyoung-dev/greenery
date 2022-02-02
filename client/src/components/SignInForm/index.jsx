import { Link } from "react-router-dom";
import * as S from "./styles";

function SignInForm() {
  return (
    <S.LayoutLoginForm>
      <S.InputWrap>
        <S.FullWidthInput placeholder="아이디를 입력하세요"></S.FullWidthInput>
      </S.InputWrap>
      <S.InputWrap>
        <S.FullWidthInput type="password" placeholder="패스워드를 입력하세요" />
      </S.InputWrap>
      <S.LayoutSignupOption>
        <S.Label>
          <S.CheckboxInput type="checkbox" />
          로그인유지
        </S.Label>
        <Link to="#">아이디/비밀번호 찾기</Link>
      </S.LayoutSignupOption>
      <S.FormFooter>
        <S.ButtonWrap>
          <S.FullWidthButton onClick={event => event.preventDefault()}>
            로그인
          </S.FullWidthButton>
        </S.ButtonWrap>
        <S.LayoutSignUpLink>
          <Link to="/signup">처음 방문하셨나요?</Link>
        </S.LayoutSignUpLink>
      </S.FormFooter>
    </S.LayoutLoginForm>
  );
}

export default SignInForm;
