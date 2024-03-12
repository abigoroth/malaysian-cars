const data = require("./data.json");
const allMakes = data.makes;
const allModels = data.models;

const getModels = makerName => {
  let models = [];
  const makeEl = allMakes.find((x) => x.name === makerName);
  allModels.filter(modelFilter => {
    if (modelFilter.parent_id === makeEl.id) {
      const modelList = modelFilter.values;

      modelList.map(modelFilter2 => {
        models.push(modelFilter2.name);

        return null;
      });
    }
    return null;
  });

  return models;
};

module.exports.allMakes = allMakes;
module.exports.allModels = allModels;

module.exports.getModels = getModels;

