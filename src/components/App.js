import React from 'react';
import { Provider } from 'react-redux'; // Import Provider from react-redux
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Main';
import Quiz1 from './Quiz1';
import Quiz2 from './Quiz2';
import Result from './Result';
import Answer1 from './Answer1';
import Answer2 from './Answer2';
import store from '../redux/store'; // Import your Redux store
import { AnimatePresence } from 'framer-motion';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
  },
  {
    path: '/quiz1',
    element: <Quiz1 />,
  },  
  {
    path: '/quiz2',
    element: <Quiz2 />,
  },
  {
    path: '/result',
    element: <Result />,
  },
  {
    path: '/answer1',
    element: <Answer1 />,
  },
  {
    path: '/answer2',
    element: <Answer2 />,
  },
]);

function App() {
  return (
    // Wrap your app with the Provider and pass your Redux store
    <Provider store={store}>
      <AnimatePresence>
        <RouterProvider router={router}></RouterProvider>
      </AnimatePresence>
    </Provider>
  );
}

export default App;
