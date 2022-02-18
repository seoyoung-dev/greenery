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
          {/* {console.log(props.postId)} */}
          <Link to={`/post/${props.postId}`}>
            <button>
              <img src="/icon/edit.svg" alt="edit" />
            </button>
          </Link>
        </Icon>
        <Icon width={19.25}>
          <Link to={`/community`}>
            <button onClick={props.trashHandler}>
              <img src="/icon/trash.svg" alt="delete" />
            </button>
          </Link>
        </Icon>
      </IconBox>
    </SideBarWrapper>
  );
}
