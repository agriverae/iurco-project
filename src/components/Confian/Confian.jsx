import ConfianStyled from "./ConfianStyled";
import Image from "next/image";
import imagenes from "./data.json";
import image from "next/image";

function Confian() {
  //console.log( json );
  return (
    <ConfianStyled>
      <h2>Confian en nosotros</h2>
      <div className="logoEmpresas">
        <div>
          {imagenes.map((imagen) => {
            return (
              <Image
                key={imagen.alt}
                src={`/images${imagen.path}`}
                alt={imagen.alt}
                width="auto"
                height="auto"
              />
            );
          })}
        </div>
      </div>
    </ConfianStyled>
  );
}
export default Confian;
