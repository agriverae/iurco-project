import ArrowSliderStyled from "./ArrowSliderStyled";

function ArrowSlider({ className, side, onClick }) {
  return (
    <ArrowSliderStyled
      className={className}
      onClick={onClick}
      side={side}
    ></ArrowSliderStyled>
  );
}

export default ArrowSlider;
