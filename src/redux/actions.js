// actions.js

// Define action types
export const UPDATE_CORRECT_ANSWERS = 'UPDATE_CORRECT_ANSWERS';

// Action creator to update correct answers
export const updateCorrectAnswers = () => {
  return {
    type: UPDATE_CORRECT_ANSWERS,
  };
};
