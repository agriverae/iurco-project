import styled from "styled-components";

const StageCardStyled = styled.div`
  display: flex;
  margin-bottom: auto;

  .arrow {
    width: auto;
    height: 20px;
    transform: rotate(-90deg);
    margin: 0px 10px;
    img {
      height: 15px;
      width: 26px;
    }
  }
  .textBox {
    flex-direction: column;
    width: 212px;
    h3 {
      background-color: ${(props) => props.theme.colors.blue};
      border-radius: 8px;
      color: ${(props) => props.theme.colors.white};
      font-size: 20px;
      padding: 5px 17px;
      width: fit-content;
      margin-bottom: 17px;
    }
    h5 {
      color: ${(props) => props.theme.colors.blue};
      font-size: 16px;
      font-weight: 600;
      margin-bottom: 10px;
    }
    p {
      color: ${(props) => props.theme.colors.darkGray};
    }
  }
  //----------------------------------------------------
  //SACARLE EL MARGEN A LA IMAGEN ENTRE 992 Y 1200 PARA QUE NO SE SALGA DE LA VENTANA
  @media only screen and (max-width: ${(props) =>
      props.theme.breakpoints.md}px) {
    width: 100%;
    align-items: center;
    .arrow {
      width: auto;
      height: auto;
      transform: rotate(0deg);

      img {
        margin: 10px 0px 30px 0px;
      }
    }
    .textBox {
      width: 80%;
      h3 {
        border-radius: 13px;
      }
      h5 {
        width: 255px;
      }
      p {
        width: 80%;
      }
    }
  }
`;

export default StageCardStyled;
