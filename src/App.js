import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Project from './pages/project';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/project" element={<Project />} />
      </Routes>
    </div>
  );
}

export default App;
