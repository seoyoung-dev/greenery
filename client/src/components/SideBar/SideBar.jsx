import React from "react";
import { SideBarWrapper, Icon, IconBox } from "./SideBar.style";

export default function SideBar(props) {
  const bool = props.userId === props.PostUserId._id;
  return (
    <SideBarWrapper>
      <IconBox>
        <button onClick={props.likeHandler}>
          <Icon width={20.62}>
            {props.liked ? (
              <img src="/icon/thumbs-up-solid.svg" alt="thumbs-up" />
            ) : (
              <img src="/icon/thumbs-up.svg" alt="thumbs-up" />
            )}
          </Icon>
        </button>

        <button onClick={props.commentHandler}>
          <Icon width={22}>
            <img src="/icon/comment.svg" alt="comment" />
          </Icon>
        </button>

        {bool && (
          <button onClick={props.updateHandler}>
            <Icon width={22}>
              <img src="/icon/edit.svg" alt="edit" />
            </Icon>
          </button>
        )}

        {bool && (
          <button onClick={props.trashHandler}>
            <Icon width={19.25}>
              <img src="/icon/trash.svg" alt="delete" />
            </Icon>
          </button>
        )}
      </IconBox>
    </SideBarWrapper>
  );
}
