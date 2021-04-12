import * as S from "./styles";

const Content = () => {
    return (
        <S.ConWrapper>
            <S.ContentForm>
                <S.Title>
                    Title
                    <S.TitleInp></S.TitleInp>
                    Date
                    <S.DateInp type="date"></S.DateInp>
                     to
                     <S.DateInp type="date"></S.DateInp>
                </S.Title>
                <S.Content>
                    Content
                    <S.ContentInp></S.ContentInp>
                </S.Content>
                <S.Submit>
                    <S.SubmitBtn>Submit</S.SubmitBtn>
                </S.Submit>
            </S.ContentForm>
        </S.ConWrapper >
    )
}

export default Content;