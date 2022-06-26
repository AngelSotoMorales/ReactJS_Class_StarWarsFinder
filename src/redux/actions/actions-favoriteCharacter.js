export const SET_FAVORITE_CHARACTER = "FAVORITE_CHARACTER";
export const REMOVE_CHARACTER_FROM_FAVORITE_LIST =
  "REMOVE_CHARACTER_FROM_FAVORITE_LIST";

export const setFavoriteCharacter = (character) => {
  return {
    type: SET_FAVORITE_CHARACTER,
    character
  };
};

export const removeFavoriteCharacter = (character) => {
  return {
    type: REMOVE_CHARACTER_FROM_FAVORITE_LIST,
    character
  };
};
