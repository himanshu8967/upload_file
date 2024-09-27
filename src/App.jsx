import Home from "./pages/Home";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootLayout from './pages/Root';
import SignUpPage, { action as signupAction } from './pages/SignUpPage';
import LoginPage, { action as loginAction } from './pages/LoginPage';
import { tokenLoader } from './util/auth';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    id: 'root',
    loader: tokenLoader,
    children: [
      { index: true, element: <Home /> },
      { path: '/signup', element: <SignUpPage />, action: signupAction },
      { path: '/login', element: <LoginPage />, action: loginAction },
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
