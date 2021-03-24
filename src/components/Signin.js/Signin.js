import * as S from "./styles";
import Logo from "../../assets/logo.png";
import { useState } from "react";

const Signin = () => {

    return (
        <S.Wrapper>
            <S.Logo src={Logo} />
            <S.SigninWrp onClick={rel}>
                <S.Signin>Signin</S.Signin>
                <S.SigninInp>
                    <S.Id placeholder="enter your email or Id"></S.Id>
                    <S.Pw placeholder="enter your password"></S.Pw>
                    <S.Btn>Signin</S.Btn>
                </S.SigninInp>
                <S.Signup>If you don't have account <S.ToSignup>Click here</S.ToSignup></S.Signup>
            </S.SigninWrp>
        </S.Wrapper >
    );
}

export default Signin;