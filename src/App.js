import { NavLink, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import BrowseCharacters from './components/BrowseCharacters';
import CharacterDetails from './components/CharacterDetails';
import Comics from './components/Comics';
import NotFound from './components/NotFound'; // We'll create this in Task 3

const App = () => {
  const navStyle = {
    marginRight: '15px',
    textDecoration: 'none',
    color: 'black',
  };

  const activeStyle = {
    fontWeight: 'bold',
    color: 'red',
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>📚 Comic Book Library</h1>

      {/* Navigation Menu */}
      <nav>
        <NavLink to="/" style={navStyle} end activeStyle={activeStyle}>
          Home
        </NavLink>
        <NavLink to="/browse" style={navStyle} activeStyle={activeStyle}>
          Browse Characters
        </NavLink>
        <NavLink to="/comics" style={navStyle} activeStyle={activeStyle}>
          Comics
        </NavLink>
      </nav>

      <hr />

      {/* Route Configuration */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/browse" element={<BrowseCharacters />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/character/:id" element={<CharacterDetails />} />
        <Route path="/comics" element={<Comics />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
