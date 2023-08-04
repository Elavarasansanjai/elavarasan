import Nav from './components/Nav';
import Contact from './components/Contact';
import About from './components/About';
import './App.scss';

import Header from './components/Header';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
