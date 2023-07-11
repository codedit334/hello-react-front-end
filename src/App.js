import { Routes, Route, Link } from 'react-router-dom';

import Home from './components/Home';
import Random from './components/Greeting';

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/random">Random</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="random" element={<Random />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
