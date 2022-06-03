import './App.css';
import { Route, Routes } from 'react-router-dom';

import Home from './pages/home/Home';
import Navbar from './components/navbar/Navbar';
import Landing from './pages/landing/Landing';

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Landing />}></Route>
          <Route path="/home" element={<Home />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
