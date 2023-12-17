
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from './routes/Home';
import StackDataStructureApp from './routes/StackDataStructureApp';
import BubbleSortApp from './routes/BubbleSortApp';
import PalindromeProject from './routes/PalindromeProject';
import ErrorPage from "./routes/ErrorPage";
import Root from "./routes/Root";

function App() {


  const router = createBrowserRouter([
    {
      path: '/', element: < Root />,
      errorElement: <ErrorPage />,
      children: [
        { path: '/', element: < Home /> },
        { path: '/stack', element: <StackDataStructureApp /> },
        { path: '/bubble', element: <BubbleSortApp /> },
        { path: '/palindrome', element: <PalindromeProject /> },
      ]
    }
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
