import SearchBar from "../SearchBar";
import { SearchContainer, SearchButton } from "./WikiSearch.style";

export default function WikiSearch({ searchRef, handleSearch }) {
  function getInput(evt) {
    searchRef.current = evt.target.value;
  }

  return (
    <SearchContainer onSubmit={handleSearch}>
      <SearchBar handleChange={getInput} placeholder="검색어를 입력하세요" />
      <SearchButton type="submit">검색</SearchButton>
    </SearchContainer>
  );
}
