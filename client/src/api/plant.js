import axios from "axios";

export async function fetchPlant({ search, currentPage, count, filter }) {
  const plantUrl = `/api/wiki/search`;
  const parameters = {
    search: search,
    page: currentPage,
    count: count,
    ...filter,
  };
  // console.log("Filter", parameters);
  try {
    const response = await axios.get(plantUrl, {
      params: parameters,
    });
    // console.log("Response", response);
    return response;
  } catch (error) {
    console.log(error.message);
  }
}
