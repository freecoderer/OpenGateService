// src/redux/store.js

import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// Define initial state
const initialState = {
  correctAnswers: 0,
};

// Define reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_CORRECT_ANSWERS':
      return {
        ...state,
        correctAnswers: state.correctAnswers + 1,
      };
    default:
      return state;
  }
};

// Create the store
const store = createStore(
  reducer,
  composeWithDevTools() // Apply Redux DevTools
);

export default store;
