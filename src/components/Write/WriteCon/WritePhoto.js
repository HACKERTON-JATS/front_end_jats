import * as S from "./styles";

const WritePhoto = () => {
    return (
        <S.PhotoWrapper>
            <S.PhotoChoose>
                <S.PlusPhoto type="file" />
                <S.AddPhoto>사진을 추가해 주세요 <br /> *.png 나 .jpeg 만 가능합니다*</S.AddPhoto>
            </S.PhotoChoose>
        </S.PhotoWrapper>
    )
}

export default WritePhoto;