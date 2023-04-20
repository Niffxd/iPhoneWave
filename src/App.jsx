import { BrowserRouter, Routes, Route } from 'react-router-dom'; //eslint-disable-line
import Navbar from './components/Navbar/Navbar.jsx'; //eslint-disable-line
import Footer from './components/Footer/Footer.jsx'; //eslint-disable-line
import DefaultComponent from './components/DefaultComponent.jsx'; //eslint-disable-line
import DeviceBudget from './pages/DeviceBudget/DeviceBudget.jsx'; //eslint-disable-line
import Home from './pages/Home/Home.jsx'; //eslint-disable-line
import NotFound from './pages/NotFound/NotFound.jsx'; //eslint-disable-line
import banner from './assets/images/logo/title.png';
import logo from './assets/images/logo/logo.png';
import loader from './assets/loaders/oval.svg';
import categories from './assets/json/categories.json';

function App () {
  return (
    <BrowserRouter>
      <Navbar logo={logo} banner={banner} categories={categories}/>
      <Routes>
        <Route exac path='/' element={<Home />}/>
        {
          categories.map(({ category, path, page }) => {
            return (
              <Route key={category} exac path={path} element={<DefaultComponent page={page}/>} />
            );
          })
        }
        <Route exac path='/reparaciones/:device' element={<DeviceBudget loader={loader}/>} />
        <Route path='*' element={<NotFound categories={categories}/>}/>
      </Routes>
      <Footer logo={logo} banner={banner}/>
    </BrowserRouter>
  );
}

export default App;
