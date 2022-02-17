import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { CommentsArticle, CommentWrapper, CommentInfo } from './Comments.style'

export const Comments = ({ comments, loading, setComments, userInfo }) => {
  const { postId } = useParams();

  async function deleteData(comment) {
    await axios.delete("/api/posts/" + postId + "/comment/" + comment.id);
    const response = await axios.get("/api/posts/" + postId + "/comment");
    setComments(response.data.comments.reverse());
  }

  return (
    <CommentsArticle>
      {loading && <div> loading... </div>}
      {comments.map(comment => (
        <CommentWrapper key={comment.id}>
          <img src={comment.author.profileImg} alt="프로필 이미지" />
          <CommentInfo>
            <p><strong>{comment.author.name} </strong>{comment.content}</p>
            <span>{comment.createdAt}</span>
            {
              userInfo.id === comment.author._id &&
              <button onClick={() => deleteData(comment) }>· <strong>삭제</strong></button>
            }
          </CommentInfo>
        </CommentWrapper>
      ))}
    </CommentsArticle>
  );
};
