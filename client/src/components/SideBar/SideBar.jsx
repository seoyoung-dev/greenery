import React from "react";
import { Link } from "react-router-dom";
import { SideBarWrapper, Icon, IconBox } from "./SideBar.style";

export default function SideBar(props) {
  return (
    <SideBarWrapper>
      <IconBox>
        <Icon width={20.62}>
          <button onClick={props.likeHandler}>
            <img src="/icon/thumbs-up.svg" alt="thumbs-up" />
          </button>
        </Icon>
        <Icon width={22}>
          <button onClick={props.commentHandler}>
            <img src="/icon/comment.svg" alt="comment" />
          </button>
        </Icon>
        <Icon width={22}>
          <button onClick={props.updateHandler}>
            <img src="/icon/edit.svg" alt="edit" />
          </button>
        </Icon>
        <Icon width={19.25}>
          <button onClick={props.trashHandler}>
            <img src="/icon/trash.svg" alt="delete" />
          </button>
        </Icon>
      </IconBox>
    </SideBarWrapper>
  );
}
