import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Home from '../Pages/Home/Home/Home';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import AddVolunteer from '../Pages/AddVolunteer/AddVolunteer';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import BeAVolunteer from '../Pages/BeAVolunteer/BeAVolunteer';
import NeedVolunteer from '../Pages/NeedVolunteer/NeedVolunteer';
import ContactUs from '../Pages/ContactUs/ContactUs';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/addVolunteer',
        element: (
          <PrivateRoute>
            <AddVolunteer></AddVolunteer>
          </PrivateRoute>
        ),
      },
      {
        path: '/beAVolunteer',
        element: <BeAVolunteer></BeAVolunteer>,
      },
      {
        path: '/needVolunteer',
        element: <NeedVolunteer></NeedVolunteer>,
      },
      {
        path: '/contactUs',
        element: <ContactUs></ContactUs>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
