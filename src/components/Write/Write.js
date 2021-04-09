import * as S from "./styles";
import PhotoSec from "./WriteCon/WritePhoto";
import ContentSec from "./WriteCon/Content";

const Write = () => {
    return (
        <S.Wrapper>
            <PhotoSec />
            <ContentSec />
        </S.Wrapper>
    );
}

export default Write;