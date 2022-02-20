export function validateForm(list) {
  const email = list[0];
  const password = list[1];
  const checkPassword = list[2];
  const name = list[3];

  const checkLength = list => {
    const result = list.every(ele => ele.length > 0);

    return result;
  };

  const checkEmail = text => {
    const regEmail =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    return regEmail.test(text);
  };

  const compareTwoString = (originString, checkString) => {
    return originString === checkString;
  };

  const checkNotSpecialString = string => {
    // a-zA-Z0-9-가-힣 가 아닌 문자열이 있으면 true를 반환한다.
    const regExp = /[^a-zA-Z0-9-가-힣]+/g;
    if (regExp.test(string)) {
      return;
    }
    return true;
  };

  if (!checkLength(list)) {
    alert("아이디 또는 비밀번호를 확인해주세요");
    return false;
  }
  if (!checkEmail(email)) {
    alert("이메일 주소가 올바르지 않습니다.");
    return false;
  }
  if (checkPassword && !compareTwoString(password, checkPassword)) {
    alert("비밀번호가 일치하지 않습니다");
    return false;
  }
  if (name && !checkNotSpecialString(name)) {
    alert("한글, 알파벳 대소문자, 숫자만 입력하세요");
    return false;
  }

  return true;
}
