
const Reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_INFORMATION':
      return {
        ...state,
        [action.field]: action.value,
      };
    case 'ADD_ID':
      return{
        stateId: [...state.stateId, action.payload]
      }
    default:
      throw new Error();
  }
};
export default Reducer;
