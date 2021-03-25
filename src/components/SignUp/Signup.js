import Logo from "../../assets/logo.png";
import Next from "../../assets/next.png"
import * as S from "../styles";

const Signup = () => {
    return (
        <S.Wrapper>
            <S.Logo src={Logo} />
            <S.SigninWrp>
                <S.Title>
                    <S.Signin>Signup</S.Signin>
                    <S.Half>1 / 2</S.Half>
                </S.Title>
                <S.SigninInp>
                    <S.Id placeholder="enter your email or Id" />
                    <S.Pw placeholder="enter your password" />
                    <S.Next src={Next} />
                    <S.GoSignin>If you have account <S.ToSignin>Click here</S.ToSignin></S.GoSignin>
                </S.SigninInp>
            </S.SigninWrp>
        </S.Wrapper>
    )
}

export default Signup;