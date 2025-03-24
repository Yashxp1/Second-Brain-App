import Dashboard from './pages/Dashboard';
import { Signup } from './pages/Signup';
import { Signin } from './pages/Signin';
import { Home } from './pages/Home';
import {Routes, Route} from 'react-router-dom'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
};

export default App;
