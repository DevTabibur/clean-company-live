import HeaderNav from './components/HeaderNav';
import Home from './components/pages/Home/Home';
import About from './components/pages/About/About';
import Contact from './components/pages/Contact/Contact';
import Services from './components/pages/Services/Services';
import Login from './components/pages/Shared/Login/Login';
import Register from './components/pages/Shared/Register/Register';
import { Route, Routes } from 'react-router-dom';

// 52 mnt theke start
function App() {
  return (
    <>
      <HeaderNav>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/services' element={<Services/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
      </Routes>
      </HeaderNav>
      
    </>
  );
}

export default App;
