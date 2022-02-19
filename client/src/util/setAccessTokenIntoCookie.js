export const setAccessTokenIntoCookie = (response, setCookie) => {
  const accessToken = response.data.access_token;
  const JWT_EXPIRY_TIME = response.data.exp - Date.now();

  setCookie("access_token", accessToken, {
    path: "/",
    maxAge: JWT_EXPIRY_TIME / 1000,
  });
};
