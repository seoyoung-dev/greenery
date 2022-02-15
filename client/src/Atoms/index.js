import { atom } from "recoil";

export const userProfileState = atom({
  key: "userState",
  default: {
    id: 1,
    email: "example@greenfriend.com",
    name: "초록친구",
  },
});
