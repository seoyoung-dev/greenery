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
        id: "055001",
        text: "눈이 불편하지 않은 정도에요~ (300 ~ 800 Lux)",
        icon: icon_route + "sunglasses.svg",
      },
      {
        id: "055002",
        text: "햇살 좋은 날 눈 뜨기 힘든 정도에요~ (800 ~ 1500 Lux)",
        icon: icon_route + "sunny.svg",
      },
      {
        id: "055003",
        text: "카메라 플래시 라이트를 보는 정도로 눈을 뜨기 힘들어요~ (1500 ~ 10000 Lux)",
        icon: icon_route + "flash.svg",
      },
    ],
  },
  {
    num: 2,
    title: "초록이 향기는 얼마나 강했으면 좋겠나요?",
    subtitle: null,
    type: "smell",
    questions: [
      {
        id: "79001",
        text: "강했으면 좋겠어요!",
        icon: icon_route + "water.svg",
      },
      {
        id: "79002",
        text: "적당한 향기가 나면 좋겠어요!",
        icon: icon_route + "splash.svg",
      },
      {
        id: "79003",
        text: "은은하게 향이 느껴지면 좋겠어요!",
        icon: icon_route + "drops.svg",
      },
      {
        id: "79004",
        text: "향이 없었으면 좋겠어요!",
        icon: icon_route + "drop.svg",
      },
    ],
  },
  {
    num: 3,
    title: "초록이가 언제 꽃(열매)을 피우기 원하시나요?",
    subtitle: null,
    type: "bloomingSeason",

    questions: [
      {
        id: "073001",
        text: "봄에 피면 좋겠어요!",
        icon: icon_route + "sakura.svg",
      },
      {
        id: "073002",
        text: "여름에 피면 좋겠어요!",
        icon: icon_route + "watermelon.svg",
      },
      {
        id: "073003",
        text: "가을에 피면 좋겠어요!",
        icon: icon_route + "leaves.svg",
      },
      {
        id: "073004",
        text: "겨울에 피면 좋겠어요!",
        icon: icon_route + "snowman.svg",
      },
    ],
  },
  {
    num: 4,
    title: "초록이가 어느 정도로 자라길 원하시나요? (높이)",
    subtitle: null,
    type: "growthHeight",

    questions: [
      { id: "000000", text: "50 이하", icon: icon_route + "50.svg" },
      { id: "000050", text: "50 ~ 100", icon: icon_route + "100.svg" },
      { id: "000100", text: "100 ~ 150", icon: icon_route + "150.svg" },
      { id: "000150", text: "150 이상", icon: icon_route + "over.svg" },
    ],
  },
];
