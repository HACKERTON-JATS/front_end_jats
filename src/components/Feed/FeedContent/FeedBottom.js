import * as S from "./styles";
import Good from "../../../assets/Good.png";
import Participate from "../../../assets/Participate.png";

const FeedBottom = () => {
    return (
        <S.BottomWrapper>
            <S.Good src={Good} />
            <S.Participate src={Participate} />
        </S.BottomWrapper>
    )
}

export default FeedBottom;