import styled from "styled-components";

export const CommentSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 60px auto 100px auto;

  & h3 {
    margin: 0 0 30px 0;
    font-size: 18px;
    font-weight: bold;
  }
`;

export const CommentForm = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;

  & img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    object-fit: cover;
  }
`;

export const CommentInput = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 680px;
  min-height: 40px;
  padding: 8px 14px;
  border: 1px solid #e5e5e5;
  border-radius: 5px;

  & textarea {
    width: calc(100% - 40px);
    height: 20px;
    padding: 0;
    border: none;
    font-size: 16px;
    outline: none;
    resize: none;
    overflow: hidden;
    word-wrap: break-word;
  }

  & textarea::placeholder {
    font-size: 16px;
    font-weight: light;
    color: rgba(118, 118, 118, 0.8);
  }

  & button {
    padding: 0;
    background-color: white;
    border: none;
    color: rgba(4, 183, 0, 0.8);
    cursor: pointer;
  }
`;
