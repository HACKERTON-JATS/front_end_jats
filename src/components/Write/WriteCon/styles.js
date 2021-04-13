import styled from "styled-components";


export const PhotoWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const PhotoChoose = styled.div`
    width: 40%;
    height: 400px;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    cursor: pointer;
    position: ${({ position }) => position};
    transform: translateX(${({ transform }) => transform});
    transition: 1s;
    /* opacity: ${({ opacity }) => opacity};
    /* z-index: ${({ zIndex }) => zIndex}; */ */
`

export const PhotoPlus = styled.input`
    position: absolute;
    width: 200px;
    height: 200px;
    margin-top: -80px;
    cursor: pointer;
    opacity: 0;
`

export const PlusPhoto = styled.img`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const AddPhoto = styled.p`
    color: #747474;
    font-size: 20px;
    margin-top: 30px;
    text-align: center;
`

export const ConWrapper = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
`

export const ContentForm = styled.form`
    margin-top: 50px;
`

export const Title = styled.div`

`

export const Content = styled.div`
    display: flex;
    margin-top: 30px;
    margin-bottom: 50px;
`

export const TitleInp = styled.input`
    width: 160px;
    height: 25px;
    margin-left: 37px;
    margin-right: 37px;
`

export const ContentInp = styled.textarea`
    width: 600px;
    height: 250px;
    margin-left: 10px;
`

export const DateInp = styled.input`
    width: 160px;
    height: 25px;
    margin-left: 20px;
    margin-right: 20px;
`

export const Submit = styled.div`
    margin-left: 9%;
    margin-bottom: 100px;
`

export const SubmitBtn = styled.button`
    width: 200px;
    height: 40px;
    font-size: 1.3rem; 
    border-radius: 10px;
    border: none;   
    color: #5959ff;
    background: #d6d6d6;
    cursor: pointer;
    outline: none;
`

export const PhotoSec = styled.div`
    transform: translateX(${({ photo }) => photo});
    transition: 1s;
`

export const RightArrow = styled.img`
    position: absolute;
    right: 20%;
    cursor: pointer;
`