import styled from "styled-components";

const SomosStyled = styled.div`
  margin: 50px 8%;
  display: flex;
  color: ${(props) => props.theme.colors.darkCyan};
  .title {
    h2 {
      color: ${(props) => props.theme.colors.darkCyan};
      font-size: 38px;
      font-weight: 800;
      margin-right: 20px;
      text-align: right;
      //modificar el interlineado
    }
  }

  .descripcion {
    & > p {
      font-size: 17px;
      margin-bottom: 25px;
    }
    h3 {
      font-size: 25px;
      font-weight: 800;
      border-bottom: 1px solid ${(props) => props.theme.colors.darkCyan};
      margin-bottom: 10px;
    }
  }
  .hubs {
    display: flex;
  }

  @media only screen and (max-width: ${(props) =>
      props.theme.breakpoints.lg}px) {
    flex-direction: column;
    margin: 50px 20px;

    //botones del slider costumizados
    .customDots {
      display: flex !important;
      list-style: none;
      justify-content: center;
      width: 100%;

      li {
        cursor: pointer;
        margin: 0 3px;
        padding: 0;
        button {
          border: none;
          background: ${(props) => props.theme.colors.darkGray};
          color: transparent;
          cursor: pointer;
          height: 12px;
          width: 12px;
          border-radius: 6px;
        }

        &.slick-active button {
          background: ${(props) => props.theme.colors.blue};
        }
      }
    }

    .title {
      background-image: url(/images/puntitos2.png);
      background-repeat: no-repeat;
      background-size: 150px;
      background-position-x: -45px;
      height: 200px;

      h2 {
        margin-left: 6%;
        margin-top: 90px;
        text-align: left;
      }
    }
    .descripcion {
      margin-left: 6%;
    }
  }
  @media only screen and (max-width: ${(props) =>
      props.theme.breakpoints.xs}px) {
  }
`;
export default SomosStyled;
