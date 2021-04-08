import * as S from "./styles";
import Plus from "../../../assets/plusPhoto.png";

const WritePhoto = () => {
    return (
        <S.PhotoWrapper>
            <S.PhotoChoose>
                <S.PlusPhoto src={Plus} />
                <S.AddPhoto>사진을 추가해 주세요</S.AddPhoto>
            </S.PhotoChoose>
        </S.PhotoWrapper>
    )
}

export default WritePhoto;