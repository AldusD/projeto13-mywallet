import Styled from 'styled-components';

export default function Form( props ) {
    return (
        <FormS>
            {props.children}
        </FormS>
    )
}

const FormS = Styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    input {
        box-sizing: border-box;
        font-family: inherit;
        height: 52px;
        width: 300px;
        background-color: white;
        border: none;
        border-radius: 10px;
        margin-bottom: 16px;
        padding-left: 10px
    }
    input::placeholder {
        color: black;
        font-size: 14px;
    }
    button {
        font-family: inherit;
        background-color: #A328D6;
        color: white;
        font-size: 14px;
        height: 52px;
        width: 300px;
        border: none;
        border-radius: 10px;
        margin-top: 10px;
    }
`;