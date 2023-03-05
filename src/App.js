import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

function App() {
  return (
    <>
  <Navbar name="TextUtils"/>
  <div className='container'>
  <Textform heading="Enter Your Text Given Below" />
  </div>

    </>
  );
}

export default App;
