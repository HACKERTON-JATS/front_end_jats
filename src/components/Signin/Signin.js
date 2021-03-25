import * as S from "../styles";
import Logo from "../../assets/logo.png";
import { useEffect, useState } from "react";

const Signin = () => {

    const [loc, setLoc] = useState("150px");
    const [opc, setOpc] = useState("0");
    const [sopc, setSopc] = useState("0");
    const [sloc, setSloc] = useState("150px");

    useEffect(() => {
        setLoc("0px");
        setOpc("1");
    }, []);

    useEffect(() => {
        setSloc("0px");
        setSopc("1");
    }, []);

    return (
        <S.Wrapper>
            <S.Logo loc={loc} opc={opc} src={Logo} />
            <S.SigninWrp sloc={sloc} sopc={sopc}>
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