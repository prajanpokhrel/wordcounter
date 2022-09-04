
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{useState} from 'react'


function App() {
  const[mode,setMode]=useState('light')
  const togglemode=()=>{
    if(mode=== 'light'){
      setMode('dark');
      document.body.style.background="black";
    }else{
      setMode('light');
      document.body.style.background="white";
      
    }

  }


  return (
   <>
   <Navbar tittle='Wordcounter' mode={mode} toggle={togglemode} />
   <TextForm tittle='Analaze your text here' />
   </>
  );
}

export default App;
