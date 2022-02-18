const icon_route = "icon/";
export const survey_data = [
  {
    num: 1,
    title: "초록이가 있을 곳에 햇빛이 얼마나 들어오나요?",
    subtitle:
      "( *조도 측정 어플을 활용하면 더욱 어울리는 초록이를 만날 수 있어요!)",
    type: "brightness",
    questions: [
      {
        id: "1",
        text: "눈이 불편하지 않은 정도에요~ (300 ~ 800 Lux)",
        icon: icon_route + "sunglasses.svg",
      },
      {
        id: "2",
        text: "햇살 좋은 날 눈 뜨기 힘든 정도에요~ (800 ~ 1500 Lux)",
        icon: icon_route + "sunny.svg",
      },
      {
        id: "3",
        text: "카메라 플래시 라이트를 보는 정도로 눈을 뜨기 힘들어요~ (1500 ~ 10000 Lux)",
        icon: icon_route + "flash.svg",
      },
    ],
  },
  {
    num: 2,
    title: "초록이가 살게 될 장소는 따뜻한가요?",
    subtitle: null,
    type: "growthTemperature",
    questions: [
      {
        id: "82002",
        text: "조금 선선하지만 춥지 않아요! (16~20℃)",
        icon: icon_route + "wind.svg",
      },
      {
        id: "82003",
        text: "네! 따뜻한 장소에 있을 거에요! (21~25℃)",
        icon: icon_route + "warm.svg",
      },
    ],
  },
  {
    num: 3,
    title: "초록이가 언제 꽃을 피우기 원하시나요?",
    subtitle: null,
    type: "bloomingSeason",

    questions: [
      {
        id: "1",
        text: "봄에 피었으면 좋겠어요!",
        icon: icon_route + "sakura.svg",
      },
      {
        id: "2",
        text: "여름에 피었으면 좋겠어요!",
        icon: icon_route + "watermelon.svg",
      },
    ],
  },
  {
    num: 4,
    title: "초록이 향기가 나길 원하시나요?",
    subtitle: null,
    type: "smell",

    questions: [
      {
        id: "1",
        text: "향이 없었으면 좋겠어요!",
        icon: icon_route + "nose.svg",
      },
      {
        id: "2",
        text: "은은하게 향이 느껴지면 좋겠어요!",
        icon: icon_route + "nose_scent.svg",
      },
    ],
  },
];
