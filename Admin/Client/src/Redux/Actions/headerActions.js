import { UPDATE } from "../Constants/HeaderConstants";

export const onSearchInputChange = (data) => (dispatch) => {
  dispatch({
    type: UPDATE,
    payload: data,
  });
};
