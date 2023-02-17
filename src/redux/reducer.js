import {
  CLEAR_COMMENTS,
  GET_CHARACTER,
  GET_CHARACTERS,
  GET_COMMENTS,
  UPDATE_COINS,
} from "./action";

const initialState = {
  characters: [],
  comments: [],
  character: {},
  coins: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CHARACTERS: {
      return {
        ...state,
        characters: [...state.characters, action.payload],
      };
    }
    case GET_COMMENTS: {
      return {
        ...state,
        comments: [...state.comments, action.payload],
      };
    }
    case CLEAR_COMMENTS: {
      return {
        ...state,
        comments: [],
      };
    }
    case GET_CHARACTER: {
      return {
        ...state,
        character: action.payload,
      };
    }
    case UPDATE_COINS: {
      return {
        ...state,
        coins: state.coins + parseInt(action.payload),
      };
    }
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
