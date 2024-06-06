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
import Details from '../Pages/Details/Details';
import AllVolunteer from '../Pages/AllVolunteer/AllVolunteer';
import Detailss from '../Pages/AllVolunteer/Details/Detailss';
import MyPost from '../Pages/ManagePost/MyPost';
import Update from '../Pages/ManagePost/Update';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/adds'),
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
        path: '/allVolunteer',
        element: (
          <PrivateRoute>
            <AllVolunteer></AllVolunteer>
          </PrivateRoute>
        ),
        loader: () => fetch('http://localhost:5000/adds'),
      },
      {
        path: '/beAVolunteer',
        element: <BeAVolunteer></BeAVolunteer>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/needs/${params.id}`),
      },
      {
        path: '/needVolunteer',
        element: (
          <PrivateRoute>
            <NeedVolunteer></NeedVolunteer>
          </PrivateRoute>
        ),
        loader: () => fetch('http://localhost:5000/needs'),
      },
      {
        path: 'detailss/:id',
        element: (
          <PrivateRoute>
            <Detailss></Detailss>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/adds/${params.id}`),
      },
      {
        path: 'details/:id',
        element: (
          <PrivateRoute>
            <Details></Details>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/needs/${params.id}`),
      },
      {
        path: '/myPost',
        element: <MyPost></MyPost>,
        loader: () => fetch('http://localhost:5000/adds'),
      },
      {
        path: '/updatePage/:id',
        element: (
          <PrivateRoute>
            <Update></Update>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/adds/${params.id}`),
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
