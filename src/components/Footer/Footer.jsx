import FooterStyled from "./FooterStyled";
import FaceBook from "@/icons/Facebook";
import Linkedin from "@/icons/Linkedin";
import Instagram from "@/icons/Instagram";
import Logo from "@/icons/Logo";
import useLang from "@/Context/language";

const Footer = () => {
  const { footer } = useLang();
  const { list } = footer;

  return (
    <FooterStyled>
      <div className="imgCont">
        <Logo fill="white" />
      </div>
      <div className="footerNav">
        <ul>
          {list.map(({ text }, idx) => (
            <li key={idx}>
              <a href="#">{text}</a>
            </li>
          ))}
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
