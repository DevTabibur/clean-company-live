import HeaderNav from './components/HeaderNav';
import Home from './components/pages/Home/Home';
import About from './components/pages/About/About';
import Contact from './components/pages/Contact/Contact';
import Services from './components/pages/Services/Services';
import Login from './components/pages/Shared/Login/Login';
import Register from './components/pages/Shared/Register/Register';
import { Route, Routes } from 'react-router-dom';

// 52 mnt theke start
const publicRoute = [
  {path: "/", name: "Home", Component: Home},
  {path: "/about", name: "About", Component: About},
  {path: "/services", name: "Services", Component: Services},
  {path: "/contact", name: "Contact", Component: Contact},
  {path: "/login", name: "Login", Component: Login}
]

// 1hr 20 mnt theke again

function App() {
  
  return (
    <>
      <HeaderNav>
      <Routes>
      {
          publicRoute.map(({path, Component}, index) => (
            <Route path={path} element={<Component/>}/>
          ))
        }
      </Routes>
      </HeaderNav>
      
    </>
  );
}

export default App;
