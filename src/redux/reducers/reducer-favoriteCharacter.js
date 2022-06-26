import {
  SET_FAVORITE_CHARACTER,
  REMOVE_CHARACTER_FROM_FAVORITE_LIST
} from "../actions/actions-favoriteCharacter";

const favoriteCharacter = (state = [], action) => {
  switch (action.type) {
    case SET_FAVORITE_CHARACTER:
      state = [...state, action.character];
      return state;
    case REMOVE_CHARACTER_FROM_FAVORITE_LIST:
      return state.filter(
        (character) => character.name !== action.character.name
      );
    default:
      return state; //Empty array
  }
};

export default favoriteCharacter;
