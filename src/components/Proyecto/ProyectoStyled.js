import styled from "styled-components";

const ProyectoStyled = styled.div`
  padding: 40px 30px 70px 140px;
  background-color: ${(props) => props.theme.colors.ligtherBlue};
  h2 {
    color: ${(props) => props.theme.colors.blue};
    font-size: 35px;
    margin-bottom: 45px;
  }
  div {
    display: flex;
    justify-content: space-between;
  }

  .get {
    .textBox {
      h5 {
        width: 100px;
      }
    }
  }

  .development {
    .textBox {
      h5 {
        width: 120px;
      }
      p {
        width: 210px;
      }
    }
  }
  .drive {
    .textBox {
      p {
        width: 180px;
      }
    }
  }

  //----------------------------------------------------------------------------
  @media only screen and (max-width: ${(props) =>
      props.theme.breakpoints.lg}px) {
    padding: 2px 0px 65px 10px;

    .drive {
      width: 220px;
    }
  }

  @media only screen and (max-width: ${(props) =>
      props.theme.breakpoints.md}px) {
    padding: 55px 0px 65px 0px;
    //margin-bottom: 65px;
    text-align: center;
    h2 {
      font-weight: 800;
      margin-bottom: 60px;
    }

    div {
      align-items: center;
      flex-direction: column;
    }
    .get {
      .textBox {
        h5 {
          width: 200px;
        }
      }
    }

    .development {
      .textBox {
        h5 {
          width: 250px;
        }
        p {
          width: 80%;
        }
      }
    }
    .drive {
      .textBox {
        p {
          width: 75%;
        }
      }
    }
  }
`;

export default ProyectoStyled;
