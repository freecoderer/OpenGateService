import '../styles/App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Main';
import Quiz from './Quiz';
import Result from './Result';
import Answer1 from './Answer1'; // Import the Answer1 component

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
  },
  {
    path: '/quiz',
    element: <Quiz />,
  },
  {
    path: '/result',
    element: <Result />,
  },
  // Add a new route for Answer1, with the parameter :questionIndex
  {
    path: '/answer1/:questionIndex',
    element: <Answer1 />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
