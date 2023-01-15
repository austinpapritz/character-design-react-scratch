import './App.css';
import Home from './components/Home/Home.js';

import Header from '../src/components/Layout/Header/Header.js';
import Footer from '../src/components/Layout/Footer/Footer.js';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
