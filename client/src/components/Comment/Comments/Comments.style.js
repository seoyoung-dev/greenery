import styled from "styled-components";

export const CommentsArticle = styled.article`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

export const CommentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  margin-bottom: 30px;

  & img {
    width: 30px;
    height: 30px;
    border-radius: 100px;
  }
`;

export const CommentInfo = styled.div`
  width: 680px;

  & p {
    margin: 0;
    font-size: 14px;
    line-height: 22px;
  }

  & span {
    font-size: 12px;
    color: rgb(118, 118, 118);
  }

  & button {
    padding: 0;
    border: none;
    background-color: white;
    font-size: 12px;
    color: rgb(118, 118, 118);
    cursor: pointer;
  }
`;
