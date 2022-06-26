import {
  SET_CHARACTERS,
  CLEAN_LIST_CHARACTERS
} from "../actions/actions-character";

const characters = (state = [], action) => {
  switch (action.type) {
    case SET_CHARACTERS:
      return action.items;
    case CLEAN_LIST_CHARACTERS:
      return action.items;
    default:
      return state;
  }
};

export default characters;
