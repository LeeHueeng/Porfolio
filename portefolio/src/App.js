import './App.css';
import About from './Components/About';
import Work from './Components/Work';
import Home from './Components/Home';
import Content from './Components/Content';
import Resume from './Components/Resume';
function App() {
  return (
    <div >
      <div className='Home'>
        <Home />
      </div>
      <div className='About'>
        <About />
      </div>
      <div className='Work'>
        <Work />
      </div>
      <div className='Content'>
        <Content />
      </div>
      <div className='Resume'>
        <Resume />
      </div>
    </div>
  );
}

export default App;
