import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    background: #EC7508;
    padding-top: 70px;

    display: flex;
    flex-direction: column;
    align-items: center;

    input{
        border-radius: 15px;
        background-color: white;
        width: 70%;
        height: 50px;
        padding-left: 10px;
        margin-top: 50px;
        margin-bottom: 50px;
    }    
`

export const Imagem = styled.img`
    max-width: 260px;
`
export const Texto = styled.h3`
    color: white;
    font-size: 40px;
    letter-spacing: 5px;
`

