import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Comments from "./Comments";
import Pagination from "./Pagination";
import { CommentSection, CommentForm, CommentInput } from "./Comment.style";

export function Comment() {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [commentsPerPage, setCommentsPerPage] = useState(5);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts",
      );
      setComments(response.data);
      setLoading(false);
    }
    fetchData();
  }, []);

  const indexOfLast = currentPage * commentsPerPage;
  const indexOfFirst = indexOfLast - commentsPerPage;

  function currentComments(tmp) {
    let currentComments = 0;
    currentComments = tmp.slice(indexOfFirst, indexOfLast);
    return currentComments;
  }

  const textRef = useRef();

  function textResize() {
    const obj = textRef.current;
    obj.style.height = "auto";
    obj.style.height = obj.scrollHeight + "px";
  }

  const { postId } = useParams();

  return (
    <CommentSection>
      <h3>댓글</h3>
      <CommentForm>
        <img src="img/profile.png" alt="프로필 이미지" />
        <CommentInput>
          <textarea
            placeholder="댓글을 입력해주세요:)"
            ref={textRef}
            onKeyUp={textResize}
            onKeyDown={textResize}
          ></textarea>
          <button
            onClick={() => {
              async function postData() {
                const comment = {
                  userId: 1,
                  id: 101,
                  title: "임시 제목",
                  body: "임시 본문",
                };
                const response = await axios.post(
                  "https://jsonplaceholder.typicode.com/posts/",
                  comment,
                );
                setComments([...comments, response.data]);
              }
              postData();
            }}
          >
            등록
          </button>
        </CommentInput>
      </CommentForm>
      <Comments
        comments={currentComments(comments)}
        loading={loading}
        setComments={setComments}
      ></Comments>
      <Pagination
        commentsPerPage={commentsPerPage}
        totalComments={comments.length}
        paginate={setCurrentPage}
      ></Pagination>
    </CommentSection>
  );
}
