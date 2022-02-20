import { filter_data } from "./data";

import { FilterContainer, Filter, Title, Items } from "./WikiFilter.style";

export default function WikiFilter({ filterRef }) {
  function handleCheck(type, value) {
    const filter_type = filterRef.current[type];
    const index = filter_type.indexOf(value);
    if (index === -1) {
      filter_type.push(value);
      filter_type.sort((a, b) => a - b);
    } else {
      filter_type.splice(index, 1);
    }
  }
  return (
    <FilterContainer>
      {filter_data.map(data => (
        <Filter key={data.type}>
          <Title>{data.title}</Title>
          <Items>
            {data.select.map(item => (
              <li key={item.value}>
                <input
                  onChange={() => handleCheck(data.type, item.value)}
                  type="checkbox"
                  id={data.type + item.value}
                  name={data.type}
                  value={item.value}
                />
                <label htmlFor={data.type + item.value}>{item.label}</label>
              </li>
            ))}
          </Items>
        </Filter>
      ))}
    </FilterContainer>
  );
}
