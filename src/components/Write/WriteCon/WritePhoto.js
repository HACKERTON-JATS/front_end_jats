import * as S from "./styles";
import Plus from "../../../assets/plusPhoto.png";
import RightArrow from "../../../assets/RightArrow.png";
import { useState, useEffect } from "react";

const WritePhoto = () => {

    const [selFile, setSelFile] = useState();
    const [preview, setPreview] = useState();
    const [position, setPosition] = useState("normal");
    const [transform, setTransform] = useState("0px");
    const [photo, setPhoto] = useState("0px");
    // const [opacity, setOpacity] = useState("1");
    // const [zIndex, setZIndex] = useState("0");

    useEffect(() => {
        if (!selFile) {
            setPreview(undefined);
            return;
        }

        const objectUrl = URL.createObjectURL(selFile);
        setPreview(objectUrl);

        return () => URL.revokeObjectURL(objectUrl);
    }, [selFile]);

    const onSelFile = e => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelFile(undefined);
            return;
        }

        setSelFile(e.target.files[0]);

        setPosition("absolute");
        setTransform("800px");
        // setOpacity("-1");
        // setZIndex("-1");
    }

    const AddPhoto = () => {
        setTransform("0px");
        setPhoto("-800px");
    }

    return (
        <S.PhotoWrapper>
            <S.PhotoSec photo={photo}>
                {selFile && <img src={preview} />}
            </S.PhotoSec>
            <S.PhotoChoose position={position} transform={transform} >
                <S.PlusPhoto src={Plus} />
                <S.PhotoPlus type="file" onChange={onSelFile} />
                <S.AddPhoto>사진을 추가해 주세요 <br /> *.png 나 .jpeg 만 가능합니다*</S.AddPhoto>
            </S.PhotoChoose>
            <S.RightArrow onClick={AddPhoto} src={RightArrow} />
        </S.PhotoWrapper>
    )
}

export default WritePhoto;