import { Route, Routes } from 'react-router-dom';
import { Signin } from './pages/Signin';
Route;
import { Signup } from './pages/Signup';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="signin" element={<Signin />} />
        <Route path="signup" element={<Signup />} />
      </Routes>
    </div>
  );
};

export default App;
