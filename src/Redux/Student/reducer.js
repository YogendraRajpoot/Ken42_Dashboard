import {
  Count_Official,
  Count_Other,
  Count_Personal,
  Count_Total,
} from "./action";
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
    case Count_Official:
      return {
        ...state,
        countof: action.payload,
      };
    case Count_Other:
      return {
        ...state,
        countot: action.payload,
      };
    case Count_Total:
      return {
        ...state,
        total: action.payload,
      };

    default:
      return state;
  }
};
