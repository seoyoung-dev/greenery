import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import {Buttons, Pages} from "./Pagination.style"

export const Pagination = ({ commentsPerPage, totalComments, paginate }) => {
  const pageNumbers = [];
  const [pageNum, setPageNum] = useState(1);

  for (let i = 1; i <= Math.ceil(totalComments / commentsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <Buttons>
      <button onClick={() => {
        if (pageNum > 1) {
          setPageNum(pageNum - 1);
          paginate(pageNum - 1);
        }
      }}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <Pages>
        {pageNumbers.map(number => (
          <button key={number} className={pageNum === number ? "active" : ""} onClick={() => {
            paginate(number);
            setPageNum(number);
          }}>{number}</button>
        ))}
      </Pages>
      <button onClick={() => {
        if (pageNum < pageNumbers.length) {
          setPageNum(pageNum + 1);
          paginate(pageNum + 1);
        }
      }}>
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </Buttons>
  );
};