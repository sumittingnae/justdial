import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './page/Home/Home';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
