import styled from 'styled-components';

interface RowProps{marginBottom?: string;}

export const Input = styled.input`
width: 85%;
height: 100%;
margin: 0;
border: none;
outline: none;

/* Text style */
font-family: Source Sans Pro;
font-size: 20px;
font-style: normal;
font-weight: 400;
line-height: 28px;
color: ${(props) => props.theme.colors.textDescription};
::placeholder{
    color: #9599A6;
    opacity: 100%;
}; 
`;

export const Container = styled.div`
width: 100%;
max-width: 600px;
margin: 0 auto;
padding: 14px 23px;

background-color: white;
border: 1px solid #E3E4EB;
border-radius: 10px;
`;

export const Row = styled.div<RowProps>`
align-items: center;
justify-content: space-between;
display: flex;
height: 30px;
margin-bottom: ${(props)=>(props.marginBottom ? props.marginBottom : 0)};
    button{
        border:0;
        background: transparent;
    }
`;
