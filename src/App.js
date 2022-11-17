import './App.css';
import Principal from './components/Principal.jsx';
import Carts from './components/Carts';
import Instagram from './components/Instagram';
import NewsLetter from './components/NewsLetter';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Principal />
      <Carts />
      <Instagram />
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default App;
