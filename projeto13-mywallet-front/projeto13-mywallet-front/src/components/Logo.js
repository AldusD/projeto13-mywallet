import Styled from "styled-components"

export default function Logo () {
    return (
        <Title>MyWallet</Title>
    )
}

const Title = Styled.h1`
    @import url('https://fonts.googleapis.com/css2?family=Saira+Stencil+One&display=swap');
    font-family: 'Saira Stencil One', cursive;
    text-align: center;
    font-size: 20px;
    color: white;
    margin: 30px 0; 
`;