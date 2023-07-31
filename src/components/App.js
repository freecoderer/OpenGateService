import '../styles/App.css';

import {createBrowserRouter, RouterProvider} from 'react-router-dom'


/**improt components */

import Main from './Main';
import Quiz from './Quiz';
import Result from './Result';

/**react routes */
const router = createBrowserRouter([
  {
    path : '/', //루트 페이지
    element : <Main></Main>
  },
  {
    path : '/quiz', //퀴즈 페이지
    element : <Quiz></Quiz>
  },
  {
    path : '/result', //결과 페이지
    element : <Result></Result>
  }
])

function App() {
  return (
    <>
     <RouterProvider  router={router}></RouterProvider>
    </>
  );
}

export default App;
