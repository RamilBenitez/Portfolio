import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experiences from './components/Experiences';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Experiences/>
      <h1> Hi React </h1>
    </div>
  );
}

export default App;
