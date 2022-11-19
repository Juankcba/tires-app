export const uiReducer = (state, action) => {
  switch (action.type) {
    case "[Modal] - Update Language":
      return {
        ...state,
        language: action.payload,
      };

    default:
      return state;
  }
};
