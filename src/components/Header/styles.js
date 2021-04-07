import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    width: 100%;
    z-index: 1;
    background: #fff;
    box-shadow: 0px 2px 6px #969696;
`

export const LogoShape = styled.img`
    width: 8%;
`

export const LogoName = styled.img`
    width: 18%;
`

export const Sign = styled.div`
    display: flex;
    margin-right: 50px;
`

export const SignIn = styled.p`
    padding-right: 10px;
    cursor: pointer;
    color: #5D5D5D;
    &:hover{
        color: #141414;
    }
    &:active{
        color: #5D5D5D;
    }
`

export const SignUp = styled.p`
    padding-left: 10px;    
    cursor: pointer;
    color: #5D5D5D;
    &:hover{
        color: #141414;
    }
    &:active{
        color: #5D5D5D;
    }
`

