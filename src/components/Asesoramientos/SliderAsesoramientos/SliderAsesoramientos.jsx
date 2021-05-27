import Slider from "react-slick";

const SliderExperiencia = ({ children }) => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    dotsClass: "customDots",
    responsive: [
      {
        breakpoint: 1024, //acá tengo que poner el prps.(....)?
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true, //probar de usar solo 2 breack points uno para desk y otro para mobile
          dots: true,
        },
      },
      {
        breakpoint: 600, //acá tengo que poner el prps.(....)?
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480, //acá tengo que poner el prps.(....)?
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return <Slider {...settings}>{children}</Slider>;
};

export default SliderExperiencia;
