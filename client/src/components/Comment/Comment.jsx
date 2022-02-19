import React, { useState, useEffect, useRef } from "react";
import { useRecoilValue } from "recoil";
import { userProfileState } from "Atoms";
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
  const [content, setContent] = useState("");

  const { postId } = useParams();

  const userInfo = useRecoilValue(userProfileState);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const response = await axios.get("/api/posts/" + postId + "/comment");
      setComments(response.data.comments.reverse());
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
    obj.style.height = "0px";
    obj.style.height = obj.scrollHeight + "px";
  }

  async function postData(e) {
    await axios.post("/api/posts/" + postId + "/comment", { content });
    const response = await axios.get("/api/posts/" + postId + "/comment");
    setComments(response.data.comments.reverse());
    setContent("");
  }

  return (
    <CommentSection>
      <h3>댓글</h3>
      <CommentForm>
        <img
          src={userInfo.profileImg || "/icon/user.svg"}
          alt="프로필 이미지"
        />
        <CommentInput>
          <textarea
            placeholder="댓글을 입력해주세요:)"
            onChange={e => setContent(e.target.value)}
            value={content}
            ref={textRef}
            onKeyUp={textResize}
            onKeyDown={textResize}
          ></textarea>
          <button onClick={e => postData(e)}>등록</button>
        </CommentInput>
      </CommentForm>
      <Comments
        comments={currentComments(comments)}
        loading={loading}
        setComments={setComments}
        userInfo={userInfo}
      ></Comments>
      <Pagination
        commentsPerPage={commentsPerPage}
        totalComments={comments.length}
        paginate={setCurrentPage}
      ></Pagination>
    </CommentSection>
  );
}
