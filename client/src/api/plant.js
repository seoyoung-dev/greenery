import axios from "axios";

export async function fetchPlant({ search, currentPage, count, filter }) {
  const plantUrl = `/api/wiki/search`;
  const parameters = {
    search: search,
    page: currentPage,
    count: count,
    ...filter,
  };
  try {
    const response = await axios.get(plantUrl, {
      params: parameters,
    });
    return response;
  } catch (error) {}
}
