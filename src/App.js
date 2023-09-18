
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Projects from './pages/Projects';
import Products from './pages/Products';
import Login from './pages/Login';
import Contanct from './pages/Contact';
import Error from './pages/Error';

function App() {
  return <BrowserRouter>

  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path='projects' element={<Projects/>}/>
    <Route path='products' element={<Products/>} />
    <Route path='Contact' element={<Contanct/>} />
    <Route path='login' element={<Login/>} />
    <Route path='*' element={<Error/>}/>
  </Routes>
  </BrowserRouter>
}

export default App;
