import ConfianStyled from "./ConfianStyled";
import Image from "next/image";
import imagenes from "./data.json";

function Confian() {
  //console.log( json );
  return (
    <ConfianStyled>
      <h2>Confian en nosotros</h2>
      <div className="logoEmpresas">
        <div>
          {imagenes.map((imagen) => {
            return (
              //<div className=" cajaImagen">
              <Image
                key={imagen.alt}
                src={`/images${imagen.path}`}
                alt={imagen.alt}
                width="150px"
                height="100%"
                margin="50px"
              />
              //</div>
            );
          })}
        </div>
      </div>
    </ConfianStyled>
  );
}
export default Confian;
