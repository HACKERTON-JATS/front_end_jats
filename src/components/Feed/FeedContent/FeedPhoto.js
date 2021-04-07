import * as S from "./styles";
import Campaign from "../../../assets/Campaign.webp";

const FeedPhoto = () => {
    return (
        <S.PhotoWrapper>
            <S.Photo src={Campaign} />
        </S.PhotoWrapper>
    )
}

export default FeedPhoto;