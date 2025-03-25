import { Route, Routes } from 'react-router-dom';
import { Signin } from './pages/Signin';
Route;
import { Signup } from './pages/Signup';
import {Dashboard} from './pages/Dashboard';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="signin" element={<Signin />} />
        {/* <Route path="signup" element={<Signup />} /> */}
        <Route path="dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
};

export default App;
