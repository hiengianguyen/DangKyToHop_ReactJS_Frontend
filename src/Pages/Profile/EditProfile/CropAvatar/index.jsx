import { useRef } from "react";
import Cropper from "react-cropper";

function CropAvatar({ imgUrl = "", onChangeImg = () => {} }) {
  const cropperRef = useRef();
  const onCrop = () => {
    const cropper = cropperRef.current?.cropper;
    onChangeImg(cropper.getCroppedCanvas().toDataURL());
  };
  return (
    <>
      <Cropper
        ref={cropperRef}
        src={imgUrl ? imgUrl : undefined}
        style={{ height: 400, width: "100%" }}
        aspectRatio={1 / 1}
        crop={onCrop}
        guides={false}
      />
    </>
  );
}

export default CropAvatar;
