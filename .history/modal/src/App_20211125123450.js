import logo from './logo.svg';
import {useState} from 'react'
import './App.css';
import Modal from './Modal';

function App() {

  const [ismodal,setIsmodal]=useState(false)
  const handlemodal=()=>{
    setIsmodal(true);
  }
  return (
    <div className="App">

      <h1>modal is oprenn</h1>

      <button onClick={handlemodal}>modal</button>
          
          <div>
            {
              ismodal && <Modal closemodal={setIsmodal}/>
            }
          </div>
    </div>
  );
}

export default App;
