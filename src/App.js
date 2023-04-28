import {Routes, Route} from 'react-router-dom'
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import User from './Components/User';
import Contact from './Components/Contact';

function App() {
  return (
    <div className="App">
      <Navbar/>

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/user' element={<User/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
    </div>
  );
}

export default App;
