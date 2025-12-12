import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Register from './pages/Register';
import Marketplace from './pages/Marketplace';
import Events from './pages/Events';
import ProductDetail from './pages/ProductDetails';
import MyProfile from './pages/MyProfile';
import Admin from './pages/Admin';
import PrivateComponent from './components/PrivateComponent';
import PageNotFound from './pages/PageNotFound';
import { ToastContainer } from 'react-toastify';
import EventDetail from "./pages/EventDetails"
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="*" element={<PageNotFound />} />
        <Route path='/' element={<Landing />} />
        <Route path='/marketplace' element={<Marketplace />} />
        <Route path='/marketplace/:pid' element={<ProductDetail />} />
        <Route path='/events' element={<Events />} />
        <Route path='/event/:eid' element={<EventDetail />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/auth' element={<PrivateComponent />}>
          <Route path='myprofile' element={<MyProfile />} />
          <Route path='admin' element={<Admin />} />
        </Route>
      </Routes>
      <ToastContainer />
    </Router>
  );
};


export default App
