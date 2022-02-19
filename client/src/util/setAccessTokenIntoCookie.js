export const setAccessTokenIntoCookie = (response, setCookie) => {
  const JWT_EXPIRY_TIME = response.data.exp - Date.now();

  setCookie("access_token", response.data.access_token, {
    path: "/",
    maxAge: JWT_EXPIRY_TIME / 1000,
    // httpOnly: true,
  });
  // 10분 전에 로그인 연장
  //
  // setTimeout(refreshAccessToken, JWT_EXPIRY_TIME - 10 * 6000);
};
