import styled from "styled-components";
import StartGame from "./components/StartGame";
import './App.css'
import { useState } from "react";
import GamePlay from "./components/GamePlay";
import Rules from "./components/Rules";

function App() {
  const[isGameStarted, setIsGameStarted] = useState();
  

  const toggleGamePlay =()=>{
    setIsGameStarted((prev)=>!prev);
  }


  return (
    <>
    {
      isGameStarted ? <GamePlay/> : <StartGame toggle={toggleGamePlay}/>
    }
   
    </> 
  );
};

export default App

