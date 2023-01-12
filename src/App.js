import './App.css';
// import Background from '/assets/bg.jpeg';
import Home from './components/Home/Home.js';

import Header from '../src/components/Layout/Header/Header.js';
import Footer from '../src/components/Layout/Footer/Footer.js';

function App() {
  return (
    // <div className="App" style={{ backgroundImage: `url('${Background}')` }}>
    <div className="App">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
