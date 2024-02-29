import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import ArzDetails from './components/Arzlist/ArzDetails';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/Home' element={<Home/>} />
      <Route path="/arz/:id" element={<ArzDetails/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
