const smellObject = {
  1: "거의 없음",
  2: "약함",
  3: "중간",
  4: "강함",
};

const bloomingSeasonObject = {
  1: "봄",
  2: "여름",
  3: "가을",
  4: "겨울",
};

const brightnessObject = {
  1: "낮은 광도(300~800 Lux)",
  2: "중간 광도(800~1,500 Lux)",
  3: "높은 광도(1,500~10,000 Lux)",
};

const translateOptionToText = optionObj => {
  const translated = [];
  if (Boolean(optionObj)) {
    return translated;
  }

  for (const [key, options] of Object.entries(optionObj)) {
    switch (key) {
      case "search":
        console.log("hi");
        if (!options) break;
        const keyword = options;
        translated.push({ plantName: { $regex: new RegExp(keyword) } });
        break;
      case "brightness":
        if (options.length === 0) break;
        const brightnessParams = options.map(
          option => brightnessObject[option],
        );
        translated.push({ brightness: { $in: brightnessParams } });
        break;
      case "smell":
        if (options.length === 0) break;
        const smellParams = options.map(option => smellObject[option]);
        translated.push({ smell: { $in: smellParams } });
        break;
      case "bloomingSeason":
        if (options.length === 0) break;
        const bloomingSeasonParams = options.map(
          option => bloomingSeasonObject[option],
        );
        translated.push({ bloomingSeason: { $in: bloomingSeasonParams } });
        break;
      case "growthHeight":
        if (options.length === 0) break;
        const heightParams = options.map(option => {
          if (option === 15) {
            return {
              growthHeight: { $gt: option * 10 },
            };
          }
          return {
            growthHeight: { $gt: option * 10, $lte: (option + 5) * 10 },
          };
        });
        translated.push({ $or: heightParams });
        break;
      default:
        break;
    }
  }
  console.log(translated);
  return [
    {
      $match: { $and: translated },
    },
  ];
};

module.exports = translateOptionToText;
