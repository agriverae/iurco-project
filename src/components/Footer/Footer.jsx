import FooterStyled from "./FooterStyled";
import FaceBook from "@/icons/Facebook";
import Linkedin from "@/icons/Linkedin";
import Instagram from "@/icons/Instagram";
import Logo from "@/icons/Logo";

const Footer = () => {
  return (
    <FooterStyled>
      <div className="imgCont">
        <Logo fill="white" />
      </div>
      <div className="footerNav">
        <ul>
          <li>
            <a href="#">SOMOS</a>
          </li>
          <li>
            <a href="#">HACEMOS</a>
          </li>
          <li>
            <a href="#">DICEN DE NOSOTROS</a>
          </li>
          <li>
            <a href="#">PROYECTOS</a>
          </li>
          <li>
            <a href="#">METODOLOGÍA</a>
          </li>
          <li>
            <a href="#">CLIENTES</a>
          </li>
          <li>
            <a href="#">CONTACTO</a>
          </li>
        </ul>
      </div>
      <div className="socialSection">
        <a className="facebook" href="#">
          <FaceBook fill="white" />
        </a>
        <a href="#">
          <Linkedin fill="white" />
        </a>
        <a href="#">
          <Instagram fill="white" />
        </a>
      </div>
    </FooterStyled>
  );
};

export default Footer;
