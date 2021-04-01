import styled from "styled-components";

export const Global = styled.section`
    width: 140%;
    display: grid;
    grid: '. .';
`

export const Wrapper = styled.div`
    display: flex;
`

export const Logo = styled.img`
    width: 50%;
    transition: 1s linear;
    opacity: ${({ opc }) => opc};
`

export const SigninWrp = styled.div`
    display: ${({ dis }) => dis};
    flex-direction: column;
    margin-left: 50px;
    transition: 1s linear; 
    transition-delay: 0.6s;
    opacity: ${({ sopc }) => sopc};
    width: 50%;
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
    align-items: baseline;
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
    cursor: pointer;
    margin-top: 30px;
`

export const GoSignup = styled.p`
    margin-left: 20px;
`

export const Signup = styled.p`

`

export const ToSignup = styled.a`
    text-decoration: underline;
    color: #7ECBFC;
`

export const Next = styled.img`
    width: 40px;
    margin-top: 50px;
    cursor: pointer;
    margin-left: 45%;
`

export const Half = styled.p`
    margin-bottom: 0;
    color: #848484;
    font-size: 30px;
    margin-right: 20%;
`

export const Title = styled.div`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
`

export const GoSignin = styled.p`
    margin-top: 30px;
    margin-left: 5%;
`

export const ToSignin = styled.a`
    text-decoration: underline;
    color: #7ECBFC;
    cursor: pointer;
`

export const DetailWrp = styled.div`
    display:flex;
    flex-direction: column;
    transition: 0.5s linear; 
    opacity: ${({ sopc }) => sopc};
    transform: translateX(${({ trans }) => trans});
`

export const Name = styled.input`
    width: 500px; 
    height: 60px;
    border-radius: 15px;
    border: 1px solid #BCBCBC;
    margin-top: 50px;
    text-indent: 25px;
`


export const DetailInp = styled.div`
    display: flex;
    flex-direction: column;
`

export const Region = styled.select`
    width: 500px;
    height: 60px;
    border-radius: 15px;
    border: 1px solid #BCBCBC;
    color: #585858;
    font-size: 20px;
    outline: none;
    text-indent: 20px;
    margin-top: 50px;
`

export const SignBtn = styled.button`
    width: 450px;
    height: 40px;
    cursor: pointer;
    border: none;
    outline: none;
    font-weight: 250;
    background: #B5B5B5;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 25px;
    color: #fff;
    margin-top: 30px;
`

export const DeWrapper = styled.section`
    
`