export default function reducer(state = [], action) {
  switch (action.type) {
    case "FETCH_CATEGORY":
      return action.payload;
    default:
      return state;
  }
}
