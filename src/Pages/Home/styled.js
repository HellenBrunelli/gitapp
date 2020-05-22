import styled from 'styled-components';

export const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
`

export const Content = styled.div`
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Input = styled.input`
    border: 1px solid #ddd;
    border-radius: .25rem 0 0 .25rem;
    height: 1.5rem;

    &:focus,
    &:active {
        outline: none;
        box-shadow: none;
    }
`

export const Button = styled.button`
    border-radius: 0 .25rem .25rem 0;
    background: #000;
    border: solid 1px #000;
    height: 1.5rem;
    color: #fff;
    padding-top: 5px;
    padding-bottom: 20px;

    &:focus,
    &:active {
        outline: none;
        box-shadow: none;
    }

`

export const ErrorMsg = styled.span`
    display: block;
    font-size: 0.65rem;
    color: red;
    font-weight: 600;
    margin-top: 1rem;
`