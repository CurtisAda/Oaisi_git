import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import NavBar from'./components/NavBar/NavBar'
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
