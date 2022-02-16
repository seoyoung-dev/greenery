import { plant_dummy } from "./dummy";
// import axios from "axios";

export async function dummyFetchPlant(count, filter) {
  console.log("Filter: ", filter);
  if (count) {
    return plant_dummy.slice(0, count);
  }
  return plant_dummy;
}

// 서버 연결 준비
// export async function fetchPlant(currentPage, count, filter) {
//   const API_END_POINT = "";

//   const page = currentPage * count;
//   const plantUrl = `${API_END_POINT}posts/search?page=${page}&count=6`;
//   const { total, plants } = await axios.get(plantUrl, filter);

//   return { total, plants };
// }
