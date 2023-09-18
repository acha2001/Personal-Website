
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Projects from './pages/Projects';

import Contanct from './pages/Contact';
import Error from './pages/Error';

function App() {
  return <BrowserRouter>

  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path='projects' element={<Projects/>}/>
    <Route path='Contact' element={<Contanct/>} />
    <Route path='*' element={<Error/>}/>
  </Routes>
  </BrowserRouter>
}

export default App;
