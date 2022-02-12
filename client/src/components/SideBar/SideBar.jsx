import React from "react";
import { Icon, IconBox } from "./SideBar.style";

export default function SideBar() {
  return (
    <IconBox>
      <Icon width={20.62}>
        <img src="icon/thumbs-up.svg" alt="thumbs-up" />
      </Icon>
      <Icon width={22}>
        <img src="icon/comment.svg" alt="comment" />
      </Icon>
      <Icon width={22}>
        <img src="icon/edit.svg" alt="edit" />
      </Icon>
      <Icon width={19.25}>
        <img src="icon/trash.svg" alt="delete" />
      </Icon>
    </IconBox>
  );
}
