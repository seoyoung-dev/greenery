import React from "react";
import { Icon, IconBox } from "./SideBar.style";

export default function SideBar() {
  return (
    <IconBox>
      <Icon>
        <img src={"icon/up.svg"}></img>
      </Icon>
      <Icon>
        <img src={"icon/comment.svg"}></img>
      </Icon>
      <Icon>
        <img src={"icon/edit.svg"}></img>
      </Icon>
      <Icon>
        <img src={"icon/trash.svg"}></img>
      </Icon>
    </IconBox>
  );
}
