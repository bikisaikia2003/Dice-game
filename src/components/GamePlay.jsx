import { useState } from "react";
import styled from "styled-components";
import RoleDice from "./RoleDice";
import Rules from "./Rules"

const GamePlay = () => {
    const arrNumber = [1, 2, 3, 4, 5, 6];

    const [score,setscore] = useState(0);
    const [selectedNumber, setSelectedNumber] = useState();
    const [currentDice, setcurrentDice]= useState(1)
    const[error, setError]=useState("");
    const[showRules, setShowRules] = useState(false)
    

    const generateRandomNumber =(min,max)=>{
        return Math.floor(Math.random() * (max - min+1) + min);
    };

    const resetScore =()=>{
        setscore(0);
    }
    
    const roleDice = () =>{
        if(!selectedNumber) {
            setError("You have not selected any number ")
            return
        };
    
        
        const randomNumber = generateRandomNumber(1,6);
        setcurrentDice((prev) => randomNumber)

        if(selectedNumber==randomNumber){
            setscore((prev)=>prev+randomNumber)
        }
        else{
            setscore((prev)=>prev-1);
        }

        setSelectedNumber(undefined)
    };

    return (<BigBox>
        <div className="mainflex">
            <ScoreContainer>
                <h1>{score}</h1>
                <p>Total Score</p>
            </ScoreContainer>
            <div>
                <NumberSelector>
                    <p className="para_2">{error}</p>
                    <div className="flex">
                        {
                            arrNumber.map((value, i) => (
                                <Box
                                    isSelected={value == selectedNumber}
                                    key={i}
                                    onClick={() => {setSelectedNumber(value); setError("")}}>{value}</Box>
                            ))
                        }
                    </div>
                    <p className="para_1">Select Number</p>
        </NumberSelector>
        </div>
    </div>
    <RoleDice currentDice={currentDice} roleDice={roleDice}/>
    <div className="btns">
        <button onClick={resetScore}>Reset Score</button>
        <button onClick={()=> setShowRules((prev)=>!prev)}>{showRules ? "Hide" : "show"} Rules</button>
    </div>
    {showRules && <Rules/>}
    </BigBox >
    );
};

export default GamePlay;

const NumberSelector = styled.div`
    position: relative;
    .flex{
        display: flex;
        gap :20px
    }
    .para_1{
        font-weight: 600;
        font-size: 20px;
        position: absolute;
        right: 0; 
        padding-top: 20px;
    }
    .para_2{
        color: red;
    }
`

const  BigBox= styled.div`
    padding-top: 50px;
    .mainflex{
        display: flex;
        gap: 600px;
        align-items: center;
        justify-content: center;
    }
    .btns{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        row-gap: 15px;
        margin-top: 20px;
        margin-bottom: 5px;
    }
    .btns button{
        
        row-gap: 15px;padding: 12px 24px;
    background-color: black;
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.2s;

    &:hover {
        background-color: #333;
        transform: scale(1.05);
    }

    &:active {
        transform: scale(0.95);
    }
    }
`
const ScoreContainer = styled.div`
    max-width: 200px;
    text-align: center;
    h1{
        font-size: 100px;
        line-height: 100px;
    }
    p{
        font-size: 24px;
        font-weight: 500px;
    }
    
`

const Box = styled.div`
    width: 100px;
    height: 100px;
    border: 1px solid;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    border-radius: 8px;
    font-size: 24px;
    font-weight: 700;
    color: ${(props) => (props.isSelected ? "white" : "black")};
    background-color:${(props) => (props.isSelected ? "black" : "white")} ;
`;