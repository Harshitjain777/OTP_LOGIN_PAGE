import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Otp from "./pages/Otp";
import Error from "./pages/Error";
import Header from "./components/Header";
import {Routes , Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
      <Route path='/' element={<Login></Login>}></Route>
      <Route path='/register' element={<Register></Register>}></Route>
      <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
      <Route path='/user/otp' element={<Otp></Otp>}></Route>
      <Route path='*' element={<Error></Error>}></Route>
      </Routes>
    </>
  );
}

export default App;
