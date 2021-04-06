import * as S from "./styles";
import FeedHeader from "./FeedContent/FeedHeader";
import FeedPhoto from "./FeedContent/FeedPhoto";
import FeedBottom from "./FeedContent/FeedBottom";
// import GlobalStyle from "../../public/pub";

const FeedMain = () => {
    return (
        <S.Wrapper>
            <S.FeedWrapper>
                <FeedHeader />
                <FeedPhoto />
                <FeedBottom />
            </S.FeedWrapper>
        </S.Wrapper>
    )
}

export default FeedMain;