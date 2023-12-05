import './App.css';
import Body from './components/Body';
import ChallangeEditor from './components/ChallangeEditor';
import Explore from './components/Explore';
import IDE from './components/IDE';
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
          <Route path='/IDE' element={<IDE />} />
          <Route path='/explore' element={<Explore />} />
          <Route path='//explore/editor' element={<ChallangeEditor />} />
        </Routes>
      </div>

    </>
  );
}

export default App;
