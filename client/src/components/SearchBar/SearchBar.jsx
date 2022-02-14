import { Search, SearchContainer } from "./SearchBar.style";

export default function SearchBar({
  className,
  placeholder,
  handleChange,
  searchQuery,
}) {
  return (
    <SearchContainer className={className}>
      <img src="icon/search.svg" alt="Search icon" />
      <Search
        placeholder={placeholder}
        onChange={handleChange}
        value={searchQuery}
      />
    </SearchContainer>
  );
}
