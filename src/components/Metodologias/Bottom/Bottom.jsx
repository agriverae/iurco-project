import diana from "@/images/diana.png";
import page from "@/images/aceptado.png";
import hands from "@/images/apoyar.png";
import ImageCard from "@/components/Metodologias/ImageCard/ImageCard";
import BottomStyled from "./BottomStyled";
function Bottom() {
  return (
    <BottomStyled>
      <ImageCard
        className="alineamiento"
        image={diana}
        imgDesc="diana and dart"
        description="Alineamento entre el cliente y el equipo de desarrollo."
        maxWidthDesc="236px"
      />
      <ImageCard
        className="productividad"
        image={page}
        imgDesc="page check"
        description="Productividad y calidad."
        maxWidthDesc="130px"
        imageHeight="50px"
      />
      <ImageCard
        className="equipo"
        image={hands}
        imgDesc="shakeing hands"
        description="Equipo motivado."
        maxWidthDesc="102px"
      />
    </BottomStyled>
  );
}

export default Bottom;
