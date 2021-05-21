import CardAsesoramientosStyled from "./CardAsesoramientosStyled";
import flechaBlanca from "@/images/flechaBlancaDer.png";

function CardAsesoramientos({ title, descriptions, image }) {
  return (
    <CardAsesoramientosStyled>
      <div className="textBox">
        <h3>{title} </h3>
        <ul>
          {descriptions.map((description) => (
            <li>{description}</li>
          ))}
        </ul>
        <div>
          <button>
            Más info <img src={flechaBlanca} alt="" />
          </button>
        </div>
      </div>

      <div className="cohete">
        <img src={image} alt="" />
      </div>
    </CardAsesoramientosStyled>
  );
}

export default CardAsesoramientos;
