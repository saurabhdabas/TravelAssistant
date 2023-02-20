import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Search from './Pages/Search';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" 
          element={
            <Home/>
          }
        />
        <Route path="/search" 
          element={
            <Search/>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
