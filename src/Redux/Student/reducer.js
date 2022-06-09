import { REGISTER_BOX } from "./action";

const initState = {
  registerbox: false,
};
export const studentReducer = (state = initState, action) => {
  switch (action.type) {
    case REGISTER_BOX:
      return {
        ...state,
        registerbox: action.payload,
      };

    default:
      return state;
  }
};
