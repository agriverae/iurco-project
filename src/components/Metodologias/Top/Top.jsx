import TopStyled from "./TopStyled";
import scrum from "@/images/scrumorg.png";
function Top() {
  return (
    <TopStyled>
      <div className="textBox">
        <div className="title">
          <h2>Cómo trabajamos</h2>
          <h3>Metodología</h3>
        </div>
        <div className="description">
          <p>
            En IURCO trabajamos bajo la <b>metodología Scrum</b>, un proceso en
            el que se aplican de manera regular un conjunto de buenas prácticas
            para <b> trabajar colaborativamente</b>, en <b>equipo</b>, y{" "}
            <b>obtener el mejor resultado posible</b> de un proyecto.
          </p>
        </div>
      </div>

      <div className="imgBoxMobile">
        <img src={scrum} alt="Scrum logo" />
      </div>
    </TopStyled>
  );
}

export default Top;
