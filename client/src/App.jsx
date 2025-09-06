import { Routes, Route} from 'react-router'
import HomePage from "./Pages/HomePage";
import RegisterForm from './components/UserRegister';
import Navbar from './components/Navbar';

const App = () => {
  return <div>
    <Navbar/>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/register" element={<RegisterForm/>}/>
    </Routes>

  </div>
};

export default App;