 import { useState } from "react";
import styled from "styled-components";

const RoleDice = ({roleDice, currentDice}) =>{
    
    

    return (
        <DiceContainer>
            <div className="dice" onClick={roleDice}>
                <img src={`/images/dice/dice_${currentDice}.png`} alt="dice-1" />
            </div>
            <p>Click on Dice to Roll</p>
        </DiceContainer>
    );
};

export default RoleDice;

const DiceContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    font-size: 24px;
    font-weight: bold;

    p{
        font-size: 24px;
    }

    .dice{
        cursor: pointer;
    }
`;