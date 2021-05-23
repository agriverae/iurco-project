import HubsCard from "./HubsCard";
import SomosStyled from "./SomosStyled";
import carrito from "@/images/carro.png";
import telefono from "@/images/telefono.png";
import pc from "@/images/ordenador.png";
import { useMediaPredicate } from "react-media-hook";
import dynamic from "next/dynamic";

const DynamicSliderSomos = dynamic(() => import("./SliderSomos"), {
  ssr: false,
});

function Somos() {
  const isMobile = useMediaPredicate("(max-width: 992px)");

  return (
    <SomosStyled>
      <div className="title">
        <h2>Quiénes Somos </h2>
      </div>

      <div className="descripcion">
        <p>
          Somos una agencia boutique, sin procesos jurásicos y con la agilidad
          del mundo actual. En un mundo tan cambiante, las marcas necesitan
          moverse más rápido que nunca. Necesitan soluciones inteligentes e
          integradas desarrolladas con velocidad, escalabilidad y, sobre todo,
          calidad. nuestra solución es simple y singular. Una sola agencia que
          trabaje de manera eficaz para entregar productos por encima de la
          media.
        </p>
        <h3>Nuestros hubs</h3>
        <DynamicSliderSomos isMobile={isMobile}>
          <HubsCard
            image={carrito}
            imgDescr={"carrito de compras"}
            text={"ECOMMERCE"}
          />
          <HubsCard
            image={telefono}
            imgDescr={"teléfono celular"}
            text={"MOBILE APPS"}
          />
          <HubsCard image={pc} imgDescr={"computer"} text={"SOFTWARE"} />
          <HubsCard
            image={carrito}
            imgDescr={"online backup"}
            text={"HOSTING"}
          />
          <HubsCard
            image={carrito}
            imgDescr={"diamante"}
            text={"UX UI DESIGN"}
          />
        </DynamicSliderSomos>
      </div>
    </SomosStyled>
  );
}

export default Somos;
