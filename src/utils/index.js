//imports

//sync models up to date
// En el archivo que contiene syncModels
export const syncModels = async (sequelize, model, options = {}) => {
  try {
    await model.sync(options);
  } catch (error) {
    console.error(`Error syncing the model ${model.name}:`, error);
  }
};

//generate random string
export const generateRandomString = (type, length) => {
  let characters;
  if (type === "numeric") {
    characters = "0123456789";
  } else if (type === "characters") {
    characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  } else {
    characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";
  }

  let result = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters.charAt(randomIndex);
  }

  return result;
};
