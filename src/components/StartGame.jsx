import styled from "styled-components";

const StartGame = ({toggle}) => {
    return <Container>
        <div>
        <img src="/images/dices.png" alt="dice_image" />
        </div>
        
        <div className="content">
            <h1>DICE GAME</h1>
            <Button 
            onClick={toggle}>Play Now</Button>
        </div>
    </Container>
};

export default StartGame;

const Container = styled.div`
    max-width: 1180px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    height: 100vh;

    .content {
         position: relative;
    }


    .content h1{
        font-size: 96px;
        white-space: nowrap;
    }
`;

const Button = styled.button`
    border-radius: 5px;
    background-color: black;
    color: white;
    padding: 15px 60px;
    font-size: 25px;
    min-width: 220px;
    border: none;
    cursor: pointer;
    transition: 0.4s background ease-in;
    position: absolute;
    right: 0; 
    &:hover {
        background-color: #979292;
        transform: scale(1.05);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        transition: 0.3s background ease-in;
    }
`;