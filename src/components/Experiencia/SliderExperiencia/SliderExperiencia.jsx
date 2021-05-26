import Slider from "react-slick";

const SliderExperiencia = ({ children, isMobile }) => {
  const settings = {
    dots: true,
    infinite: true,
    centerMode: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    dotsClass: "customDots",
  };

  return isMobile ? (
    <Slider {...settings}>{children}</Slider>
  ) : (
    <div className="hubs">{children}</div>
  );
};

export default SliderExperiencia;
