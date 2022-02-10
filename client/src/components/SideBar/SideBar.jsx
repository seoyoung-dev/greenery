import React from "react";
import { Icon, IconBox } from "./SideBar.style";

export default function SideBar() {
  return (
    <IconBox>
      <Icon>
        <img src={"icon/thumbs-up.svg"} alt="thumbs-up"></img>
      </Icon>
      <Icon>
        <img src={"icon/comment.svg"} alt="comment"></img>
      </Icon>
      <Icon>
        <img src={"icon/edit.svg"} alt="edit"></img>
      </Icon>
      <Icon>
        <img src={"icon/trash.svg"} alt="delete"></img>
      </Icon>
    </IconBox>
  );
}
