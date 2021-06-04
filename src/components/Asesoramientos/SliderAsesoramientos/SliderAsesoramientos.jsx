import Slider from "react-slick";
import ArrowSlider from "./ArrowSlider";

const SliderAsesoramientos = ({ children }) => {
  var settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrow: true,
    dots: false,
    centerMode: false,
    nextArrow: <ArrowSlider side />,
    prevArrow: <ArrowSlider />,

    responsive: [
      {
        breakpoint: 1024, //acá tengo que poner el prps.(....)?
        settings: {
          slidesToShow: 2,
          infinite: true, //probar de usar solo 2 breack points uno para desk y otro para mobile
        },
      },
      {
        breakpoint: 900, //acá tengo que poner el prps.(....)?
        settings: {
          slidesToShow: 1.8,
          arrows: false,
          dots: true,
          dotsClass: "customDots",
        },
      },

      {
        breakpoint: 768, //acá tengo que poner el prps.(....)?
        settings: {
          slidesToShow: 1.2,
          slidesToScroll: 1,
          initialSlide: 0,
          dots: true,
          dotsClass: "customDots",
          centerMode: true,
          arrows: false,
        },
      },

      {
        breakpoint: 680, //acá tengo que poner el prps.(....)?
        settings: {
          slidesToShow: 1,
          dots: true,
          dotsClass: "customDots",
          centerMode: true,
          arrows: false,
        },
      },

      {
        breakpoint: 320, //acá tengo que poner el prps.(....)?
        settings: {
          slidesToShow: 1,
          dots: true,
          dotsClass: "customDots",
          centerMode: true,
          arrows: false,
        },
      },
    ],
  };

  return <Slider {...settings}>{children}</Slider>;
};

export default SliderAsesoramientos;
