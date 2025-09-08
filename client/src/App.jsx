import { Routes, Route} from 'react-router-dom'
import HomePage from "./Pages/HomePage";
import RegisterForm from './components/UserRegister';
import UserLogin from './components/UserLogin';
import VerifyOtp from './components/VerifyOtp';
import ChangePassword from './components/ChangePassword';

const App = () => {
  return <div className='bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900'>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/register" element={<RegisterForm/>}/>
      <Route path='/login' element={<UserLogin/>}/>
      <Route path='/verify-otp' element={<VerifyOtp/>}/>
      <Route path='/change-password' element={<ChangePassword/>} />
    </Routes>
</div>
};

export default App;