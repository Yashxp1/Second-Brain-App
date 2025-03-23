import { Home } from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import Signin  from './pages/Signin';
import Signup  from './pages/Signup';
import Dashboard  from './pages/Dashboard';

const App = () => {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/signin" element={<Signin/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>
    </div>
  );
};

export default App;
