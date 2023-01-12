import './App.css';
import Background from './bg.jpeg';
import Home from './components/Home/Home.js';

import Header from '../src/components/Layout/Header/Header.js';
import Footer from '../src/components/Layout/Footer/Footer.js';

function App() {
  return (
    <div className="App" style={{ backgroundImage: `url('${Background}')` }}>
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
