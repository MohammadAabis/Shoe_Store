import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomePage from './pages/homePage';
import Header1 from './pages/header1';
import Footer1 from './pages/footer1';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<HomePage/>}/>
        <Route path='/header1' element={<Header1/>}/>
        <Route path='/footer1' element={<Footer1/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
