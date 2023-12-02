import './App.css';
import Body from './components/Body';
import Editor from './components/Editor';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <div className="main">
        <Sidebar />
        <Routes>
          <Route path='/' element={<Body />} />
          <Route path='/editor' element={<Editor />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
