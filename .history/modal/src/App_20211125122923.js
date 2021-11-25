import logo from './logo.svg';
import {useState} from 'react'
import './App.css';

function App() {

  const [ismodal,setIsmodal]=useState(false)
  const handlemodal=()=>{
    setIsmodal(true);
  }
  return (
    <div className="App">

      <h1>modal is oprenn</h1>

      <button onChange={handlemodal}>modal</button>
     
    </div>
  );
}

export default App;
