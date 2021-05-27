import CardAsesoramientos from "./CardAsesoramientos";
import AsesoramientosStyled from "./AsesoramientosStyled";
import cohete from "@/images/cohete.png";
import Slider from "react-slick";
import { useMediaPredicate } from "react-media-hook";
import dynamic from "next/dynamic";
import SliderAsesoramientos from "./SliderAsesoramientos";

const DynamicSliderAsesoramientos = dynamic(
  () => import("./SliderAsesoramientos"),
  {
    ssr: false,
  }
);

function Asesoramientos() {
  return (
    <AsesoramientosStyled>
      <CardAsesoramientos
        title="CONSULTORIA"
        descriptions={[
          "Benchmark",
          "Estrategia",
          "Logística y diseño de procesos de operación",
          "Analálisis de ROI",
        ]}
        image={cohete}
      />
      <CardAsesoramientos
        title="DISEÑO IU/UX"
        descriptions={[
          "Creatividad y desarrollo",
          "Experiencias de usuario",
          "Diseño de interfaces",
          "Arquitectura de la información",
          "Diseño mobile first",
        ]}
        image={cohete}
      />
      <CardAsesoramientos
        title="DESARROLLO"
        descriptions={[
          "Implementaciones Magento",
          "Desarrollo de Node JS",
          "Integración de Sistemas externos",
          "Desarrollos de apps PWA",
        ]}
        image={cohete}
      />
    </AsesoramientosStyled>
  );
}

export default Asesoramientos;
