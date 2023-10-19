import axios from "axios";

export function fetchCategory(selectedCategory) {
  return (dispatch) => {
    return axios
      .get(`http://localhost:3000/${selectedCategory}`)
      .then((response) => {
        dispatch({
          type: "FETCH_CATEGORY",
          payload: response.data,
        });
        return response.data;
      });
  };
}
