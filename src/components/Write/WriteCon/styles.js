import styled from "styled-components";
import Plus from "../../../assets/plusPhoto.png";


export const PhotoWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
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
`

export const PlusPhoto = styled.input`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 170px;
    height: 170px;
    background-image: url(${Plus});
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
`

export const ContentInp = styled.textarea`
    width: 600px;
    height: 250px;
    margin-left: 10px;
`
