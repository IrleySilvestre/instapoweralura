import styled from 'styled-components'

export const MenuWrapper = styled.nav`
  font-family: 'Rubik', sans-serif;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 18px;
  margin-left: 28px;
  padding-right: 28px;
  `

MenuWrapper.LeftSide = styled.div`
    padding: 0;
    margin: 0;
    order: 1;
`

MenuWrapper.CentralSide = styled.div`
    padding: 0;
    margin: 0;
    order: 3;
    width: 100%;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 17px;
    border-top: 1px solid #88989E;
    border-bottom: 1px solid #88989E;
    padding: 12px;
    a {
        text-align: center;
        display: block;
        text-decoration: none;
        color: #88989E;
        transition: 200ms ease-in-out;
        &:hover,
        &:focus{
            font-weight: 500;
            color: #070C0E;
        }
    }
`

MenuWrapper.RightSide = styled.div`
    padding: 0;
    margin: 0;
    display: flex;
    flex: 1;
    order: 2;
    justify-content: flex-end;
`
export const ButtonCadastrar = styled.button`
    border: 0px none;
    cursor: pointer;
    padding: 12px 26px;
    font-weight: bold;
    opacity: 1;
    &:hover{
        opacity: 0.5;
    }
    transition: opacity 200ms ease-in-out 0s;
    border-radius: 12px;
    color: rgb(255, 255, 255);
    background-color: rgb(215, 56, 94);
`

export const ButtonEntrar = styled.button`
    border: 0px none;
    cursor: pointer;
    padding: 12px 26px;
    font-weight: bold;
    opacity: 1;
    &:hover{
        opacity: 0.5;
    }
    transition: opacity 200ms ease-in-out 0s;
    border-radius: 12px;
    color: rgb(251, 123, 107);
    background: transparent none repeat scroll 0% 0%;
    `