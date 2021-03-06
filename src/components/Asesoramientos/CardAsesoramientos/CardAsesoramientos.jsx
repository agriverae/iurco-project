import CardAsesoramientosStyled from "./CardAsesoramientosStyled";
import flechaBlanca from "@/images/flechaBlancaDer.png";

function CardAsesoramientos({ title, descriptions, image }) {
  return (
    <CardAsesoramientosStyled>
      <div className="textBox">
        <h3>{title} </h3>
        <ul>
          {descriptions.map((description, idx) => (
            <li key={idx}>{description}</li>
          ))}
        </ul>

        <button>
          Más info <img src={flechaBlanca} alt="" />
        </button>
      </div>

      <div className="cohete">
        <img src={image} alt="" />
      </div>
    </CardAsesoramientosStyled>
  );
}

export default CardAsesoramientos;
