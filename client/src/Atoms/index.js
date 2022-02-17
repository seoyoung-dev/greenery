import { atom } from "recoil";

export const userProfileState = atom({
  key: "userState",
  default: {
    id: 0,
    email: "",
    name: "",
  },
});
