import styled from "styled-components";

const CardAsesoramientosStyled = styled.div`
  display: flex;
  height: 220px;
  width: 350px;
  padding-bottom: 20px;

  .textBox {
    height: 100%;
    width: 220px;
    flex-direction: column;
    display: flex;
    align-items: baseline;

    h3 {
      font-size: 28px;
      font-weight: 800;
      color: ${(props) => props.theme.colors.darkCyan};
      padding-bottom: 12px;
    }

    li {
      color: ${(props) => props.theme.colors.darkCyan};
      font-size: 13px;
      font-weight: 500;
      list-style: none;
      padding-bottom: 5px;
    }

    button {
      display: flex;
      align-items: center;
      margin-top: auto;
      padding: 10px 15px;
      background-color: ${(props) => props.theme.colors.darkCyan};
      color: ${(props) => props.theme.colors.white};
      font-weight: 600;
      border-radius: 10px;
      border: none;

      img {
        padding-left: 10px;
      }
    }
  }
  .cohete {
    img {
      width: 85px;
    }
  }
  @media only screen and (max-width: ${(props) =>
      props.theme.breakpoints.md}px) {
    background-color: ${(props) => props.theme.colors.cyan};

    width: 350px;
    height: 377px;
    padding: 40px 0px 40px 40px;

    .textBox {
      h3 {
        padding-bottom: 18px;
      }

      li {
        font-size: 19px;
        font-weight: 500;
      }

      button {
        padding: 18px 23px;
        font-size: 16px;
        border-radius: 15px;
        img {
          padding-left: 20px;
        }
      }
    }
    .cohete {
      img {
        margin-top: 195px;
        margin-left: -40px;
        width: 115px;
      }
    }
  }

  //xs: 480, //mobile
  //sm: 768, // tablet
  //md: 992, // deskop
  //lg: 1200, // big desktop
  //xlg: 1600,

  @media only screen and (max-width: ${(props) =>
      props.theme.breakpoints.sm}px) {
    background-color: ${(props) => props.theme.colors.cyan};
    flex-direction: column;
    max-width: 90%;
    height: 300px;
    padding: 20px;

    .textBox {
      width: 80%;
      h3 {
        font-size: 18px;
        font-weight: 800;
        padding-bottom: 18px;
      }

      li {
        font-size: 12px;
        font-weight: 500;
      }

      button {
        padding: 10px 13px;
        font-size: 10px;
        border-radius: 15px;
        img {
          height: 10px;
          padding-left: 20px;
        }
      }
    }
    .cohete {
      img {
        margin-top: -50px;
        margin-left: 120px;
        width: 70px;
      }
    }
  }

  //copiar xs a sm
  @media only screen and (max-width: ${(props) =>
      props.theme.breakpoints.xs}px) {
    background-color: ${(props) => props.theme.colors.cyan};
    flex-direction: column;
    max-width: 90%;
    min-width: 177px;
    height: 300px;
    padding: 20px;

    .textBox {
      width: 80%;
      h3 {
        font-size: 18px;
        font-weight: 800;
        padding-bottom: 18px;
      }

      li {
        font-size: 12px;
        font-weight: 500;
      }

      button {
        padding: 10px 13px;
        font-size: 10px;
        border-radius: 15px;
        img {
          height: 10px;
          padding-left: 20px;
        }
      }
    }
    .cohete {
      img {
        margin-top: -50px;
        margin-left: 120px;
        width: 70px;
      }
    }
  }
`;

export default CardAsesoramientosStyled;
