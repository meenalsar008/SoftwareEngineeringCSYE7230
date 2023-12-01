import { UPDATE } from "../Constants/HeaderConstants";

export const headerReducer = (state = { search: "" }, action) => {
  switch (action.type) {
    case UPDATE:
      return { search: action.payload };
    default:
      return state;
  }
};
