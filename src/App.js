import './App.css';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Header from './pages/header/Header';
import Main from './pages/main/Main';
import Work from './pages/work/Work';

function App() {
  return (
  <div className="App">
    <div className="container">
      <div id="section1" className="start">
        <Header />
        <Main />
      </div>
      <div id="section2">
        <Work />
      </div>
      <div id="section3">
        <About />
      </div>
      <div id="section4">
        <Contact />
      </div>
    </div>
  </div>
  );
}

export default App;
