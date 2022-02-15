import SearchBar from "../SearchBar";
import { SearchContainer, SearchButton } from "./WikiSearch.style";

export default function WikiSearch({ setSearchQuery, onclick }) {
  function getInput(evt) {
    setSearchQuery(evt.target.value);
  }
  return (
    <SearchContainer>
      <SearchBar handleChange={getInput} placeholder="검색어를 입력하세요" />
      <SearchButton handleClick={onclick}>검색</SearchButton>
    </SearchContainer>
  );
}
