import { UPDATE_CORRECT_ANSWERS } from './actions'; // Make sure the import path is correct

const initialState = {
  correctAnswers: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CORRECT_ANSWERS:
      return {
        ...state,
        correctAnswers: state.correctAnswers + 1,
      };
    default:
      return state;
  }
};

export default reducer;
