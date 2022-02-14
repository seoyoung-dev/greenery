import { Search, SearchContainer } from "./SearchBar.style";

export default function SearchBar({ placeholder, handleChange, searchQuery }) {
  return (
    <SearchContainer>
      <img src="icon/search.svg" alt="Search icon" />
      <Search
        placeholder={placeholder}
        onChange={handleChange}
        value={searchQuery}
      />
    </SearchContainer>
  );
}
