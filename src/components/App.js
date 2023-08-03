import '../styles/App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Main';
import Quiz1 from './Quiz1';
import Result from './Result';
import Answer1 from './Answer1'; // Import the Answer1 component

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
    path: '/result',
    element: <Result />,
  },
  // Add a new route for Answer1, with the parameter :questionIndex
  {
    path: '/answer1',
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
