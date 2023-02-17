import './App.css';
import {
  Route,
  Routes
} from "react-router-dom";
import Home from './component/Home/Home';
import Register from './component/Register/Register';
import Login from './component/login/Login';
import DonorRegister from './component/DonorRegister/DonorRegister';
import BloodGroupList from './component/BloodGroupList/BloodGroupList';
function App() {
  return (
    <div className="App">
      {/* <Home/> */}
      <div className="bodyContainer">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/donor-register' element={<DonorRegister />} />
        <Route path='/search' element={<BloodGroupList />} />
      </Routes>
      </div>
    </div>
  );
}

export default App;
