import ProyectoStyled from "./ProyectoStyled";
import StageCard from "@/components/StageCard";

function Proyecto() {
  return (
    <ProyectoStyled>
      <h2>Proceso del proyecto</h2>

      <div>
        <StageCard
          className="discovery"
          stage="DISCOVERY"
          title="GANAR CONOCIMIENTOS ESTRATÉGICOS"
          description="En sus usuarios y el panorama actual."
        ></StageCard>

        <StageCard
          className="get"
          haveArrow
          stage="GET READY"
          title="DEFINIR EL CONCEPTO"
          description="Asegurar que nuestra visión, objetivos e ideas estén encaminadas."
        ></StageCard>

        <StageCard
          className="development"
          haveArrow
          stage="DEVELOPMENT"
          title="ENTREGAR LA SOLUCIÓN"
          description="Permanecer abierto para adaptarse y mejorar a medida que aprendemos y progresamos."
        ></StageCard>

        <StageCard
          className="drive"
          haveArrow
          stage="DRIVE"
          title="OPTIMIZAR LA EXPERIENCIA"
          description="Escuchar, monitorear e investigar para entregar la mejor experiencia al cliente."
        ></StageCard>
      </div>
    </ProyectoStyled>
  );
}

export default Proyecto;
