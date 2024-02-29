import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import ArzDetails from './components/Arzlist/ArzDetails';
import TaslakArzList from './components/TaslakArzList/TaslakArzList';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/Home' element={<Home/>} />
      <Route path="/arz/:id" element={<ArzDetails/>} />
      <Route path='/Taslak-Arz' element={<TaslakArzList/>} />
      
    </Routes>
    </BrowserRouter>
  );
}

export default App;
