import styled from 'styled-components';

const MenuContainer = styled.div`
    height: 200px;
    
    @media only screen and (max-width: 550px){
        width:90%;
    }
    width:42.5%;
    margin: 20px;
    cursor: pointer;
    background: #014f00;
    box-shadow: 10px 10px 8px #888888;
    display: flex;
    float: left;
    
   
   
    
     
`;

const PadObject = styled.div`
// padding: 5vh;

`;

const MenuText = styled.div`
    color: white;
    align-self:center;
    margin: auto;
    font-size: 40px;
    // padding: 40px
    font-family: Impact;
   
`;

const HeaderImg = styled.div`
    padding: 50px;
    background-color: #014f00;
`;




export {MenuContainer, MenuText, HeaderImg, PadObject};