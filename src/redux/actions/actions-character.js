export const SET_CHARACTERS = "SET_CHARACTERS";
export const CLEAN_LIST_CHARACTERS = "CLEAN_LIST_CHARACTERS";

export const setCharacters = (items) => {
  return {
    type: SET_CHARACTERS,
    items
  };
};

export const cleanListCharacters = () => {
  return {
    type: CLEAN_LIST_CHARACTERS,
    items: []
  };
};
