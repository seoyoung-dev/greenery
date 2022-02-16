import { PageButton, ArrowButton, Container } from "./Pagination.style";

export default function Pagination({ currentPage, pageCount, onClickPage }) {
  return (
    <Container>
      <ArrowButton
        disabled={currentPage === 0}
        onClick={() => onClickPage(currentPage - 1)}
      >
        <img src="icon/arrow.svg" alt="previous arrow button" />
      </ArrowButton>
      {getPageNumbers(currentPage, pageCount).map(page => {
        return (
          <PageButton
            key={`button-${page}`}
            active={currentPage === page}
            onClick={() => onClickPage(page)}
          >
            {page + 1}
          </PageButton>
        );
      })}

      <ArrowButton
        flip
        disabled={currentPage === pageCount - 1}
        onClick={() => onClickPage(currentPage + 1)}
      >
        <img src="icon/arrow.svg" alt="next arrow button" />
      </ArrowButton>
    </Container>
  );
}

function getPageNumbers(currentPage, pageCount) {
  const resultPages = [];
  resultPages.push(currentPage);

  let index = 1;
  while (resultPages.length < 9) {
    if (currentPage + index < pageCount) {
      resultPages.push(currentPage + index);
    }
    if (currentPage - index > -1) {
      resultPages.unshift(currentPage - index);
    }
    index++;
  }

  return resultPages;
}
