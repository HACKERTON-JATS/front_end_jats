import Logo from "../../assets/logo.png";
import { useState, useEffect } from "react";
import Next from "../../assets/next.png"
import * as S from "../styles";
import { NavLink } from "react-router-dom";
import SignupDetail from "./SignupDetail";

const Signup = () => {

    const [opc, setOpc] = useState("0");
    const [sopc, setSopc] = useState("0");

    useEffect(() => {
        setOpc("1");
    }, []);

    useEffect(() => {
        setSopc("1");
    }, []);

    return (
        <S.Global>
            <S.Wrapper>
                <S.Logo src={Logo} opc={opc} />
                <S.SigninWrp sopc={sopc}>
                    <S.Title>
                        <S.Signin>Signup</S.Signin>
                        <S.Half>1 / 2</S.Half>
                    </S.Title>
                    <S.SigninInp>
                        <S.Id placeholder="enter your email or Id" />
                        <S.Pw placeholder="enter your password" />
                        <NavLink to="/SignupDetail"><S.Next src={Next}></S.Next></NavLink>
                        <S.GoSignin>If you have account <NavLink to="/Signin">Click here</NavLink></S.GoSignin>
                    </S.SigninInp>
                </S.SigninWrp>
            </S.Wrapper>
            <SignupDetail />
        </S.Global>
    )
}

export default Signup;