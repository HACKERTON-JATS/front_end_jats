import * as S from "../styles";
import Logo from "../../assets/logo.png";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Signin = () => {

    const [opc, setOpc] = useState("0");
    const [sopc, setSopc] = useState("0");

    useEffect(() => {
        setOpc("1");
    }, []);

    useEffect(() => {
        setSopc("1");
    }, []);

    return (
        <S.Wrapper>
            <S.Logo opc={opc} src={Logo} />
            <S.SigninWrp sopc={sopc}>
                <S.Signin>Signin</S.Signin>
                <S.SigninInp>
                    <S.Id placeholder="enter your email or Id"></S.Id>
                    <S.Pw placeholder="enter your password"></S.Pw>
                    <S.Btn>Signin</S.Btn>
                </S.SigninInp>
                <S.GoSignup>If you don't have account <NavLink to="/Signup">Click here</NavLink></S.GoSignup>
            </S.SigninWrp>
        </S.Wrapper >
    );
}

export default Signin;