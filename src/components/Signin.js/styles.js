import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
`

export const Logo = styled.img`
    width: 50%;
    transition: 0.3s linear;
`

export const SigninWrp = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 50px;
`

export const Signin = styled.p`
    color: #304A76;
    font-size: 100px;
    float: left;
    margin-bottom: 0;
`

export const SigninInp = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
`

export const Id = styled.input`
    width: 500px;
    height: 60px;
    border-radius: 15px;
    border: 1px solid #BCBCBC;
    text-indent: 25px;
`

export const Pw = styled.input`
    width: 500px; 
    height: 60px;
    border-radius: 15px;
    border: 1px solid #BCBCBC;
    margin-top: 50px;
    text-indent: 25px;
`

export const Btn = styled.button`
    width: 450px;
    height: 40px;
    border: none;
    outline: none;
    font-weight: 250;
    background: #B5B5B5;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 25px;
    color: #fff;
    margin-top: 30px;
`

export const Signup = styled.p`
    margin-left: 30px;
`

export const ToSignup = styled.a`
    text-decoration: underline;
    color: #7ECBFC;
`