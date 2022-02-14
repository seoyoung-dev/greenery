export const filter_data = [
  {
    title: "광도(Lux)",
    type: "brightness",
    select: [
      { value: "1", label: "낮은 광도(300 ~ 800)" },
      { value: "2", label: "중간 광도(800 ~ 1500)" },
      { value: "3", label: "높은 광도(1500 ~ 10000)" },
    ],
  },
  {
    title: "냄새",
    type: "smell",
    select: [
      { value: "1", label: "거의 없음" },
      { value: "2", label: "약함" },
      { value: "3", label: "중간" },
      { value: "4", label: "강함" },
    ],
  },
  {
    title: "꽃피는 계절",
    type: "bloomingSeason",
    select: [
      { value: "1", label: "봄" },
      { value: "2", label: "여름" },
      { value: "3", label: "가을" },
      { value: "4", label: "겨울" },
    ],
  },
  {
    title: "성장 높이(cm)",
    type: "growthHeight",
    select: [
      { value: "0", label: "0 ~ 5" },
      { value: "5", label: "5 ~ 10" },
      { value: "10", label: "10 ~ 15" },
      { value: "15", label: "15 이상" },
    ],
  },
];
