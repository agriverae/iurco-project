import ImageCardStyled from "./ImageCardStyled";

function ImageCard({
  className,
  image,
  imgDesc,
  description,
  maxWidthDesc,
  imageHeight,
}) {
  return (
    <ImageCardStyled
      imageHeight={imageHeight}
      maxWidthDesc={maxWidthDesc}
      className={className}
    >
      <div className="imageBox">
        <img src={image} alt={imgDesc} />
      </div>
      <div className="description">
        <p>{description}</p>
      </div>
    </ImageCardStyled>
  );
}

export default ImageCard;
