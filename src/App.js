import { useState } from 'react';
import './App.css';
import MainBody from './components/Mainbody/MainBody';
import Navbar from './components/Navbar/Navbar';

function App() {
  const [category,setCategory] =useState();
  return (
    <div className="App">
    < Navbar setCategory={setCategory}/>
    < MainBody category={category}/>
    
      
   

    </div>
  );
}

export default App;
