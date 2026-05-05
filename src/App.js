import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import WelcomeLight from './Pages/WelcomeLight';
import MenuCoffee from './Pages/MenuCoffee';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<WelcomeLight />} />
        <Route path='/menu-list' element={<MenuCoffee />} />
      </Routes>
    </div>
  );
}

export default App;
