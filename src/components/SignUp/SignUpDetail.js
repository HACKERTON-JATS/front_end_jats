import * as S from "../styles";
import Logo from "../../assets/logo.png";
import { useState, useEffect } from "react";

const SignupDetail = ({ zin, deo }) => {

    const [sopc, setSopc] = useState("0");


    useEffect(() => {
        setSopc("1");
    }, []);



    return (
        <S.DetailWrp sopc={sopc}>
            <S.Signin>Signup</S.Signin>
            <S.DetailInp>
                <S.Name placeholder="enter your name" />
                <S.Region>
                    <option value="Daejeon">Daejeon</option>
                    <option value="Seoul">Seoul</option>
                    <option value="Incheon">Incheon</option>
                    <option value="Busan">Busan</option>
                    <option value="Ulsan">Ulsan</option>
                    <option value="Gwangju">Gwangju</option>
                    <option value="Daegu">Daegu</option>
                    <option value="Jejudo">Jejudo</option>
                </S.Region>
                <S.SignBtn>Signup</S.SignBtn>
                {/* <S.Signup>If you have account <S.ToSignup>Click here</S.ToSignup></S.Signup> */}
            </S.DetailInp>
        </S.DetailWrp>
    )
}

export default SignupDetail;