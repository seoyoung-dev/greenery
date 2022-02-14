import { plant_dummy } from "./dummy";

// 서버 연결시 filter 보내기
export default async function fetchPlant(count, filter) {
  console.log("Filter: ", filter);
  if (count) {
    return plant_dummy.slice(0, count);
  }
  return plant_dummy;
}
