import * as S from "./styles.js";
import GlobalStyle from "../../public/GlobalStyle";
import LogoName from "../../assets/LogoName.png";
import LogoShape from "../../assets/LogoShape.png"

const Header = () => {
    return (
        <>
            <GlobalStyle></GlobalStyle>
            <S.Wrapper>
                <S.LogoShape src={LogoShape} alt="" />
                <S.LogoName src={LogoName} />
                <S.Sign>
                    <S.SignIn>Signin</S.SignIn>
                /
                <S.SignUp>Signup</S.SignUp>
                </S.Sign>
            </S.Wrapper>
        </>
    )
}

export default Header;