import * as S from "./styles";

const Content = () => {
    return (
        <S.ConWrapper>
            <S.ContentForm>
                <S.Title>
                    Title
                    <S.TitleInp></S.TitleInp>
                </S.Title>
                <S.Content>
                    Content
                    <S.ContentInp></S.ContentInp>
                </S.Content>
            </S.ContentForm>
        </S.ConWrapper>
    )
}

export default Content;