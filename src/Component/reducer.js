
const Reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_INFORMATION':
      return {
        ...state,
        [action.field]: action.value,
      };
    default:
      throw new Error();
  }
};
export default Reducer;
