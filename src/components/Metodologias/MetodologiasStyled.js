import styled from "styled-components";

const MetodologiasStyled = styled.div`
  background-color: ${(props) => props.theme.colors.cyan};
  display: flex;
  padding: 50px 100px 65px 100px;
  width: 100%;
  .textBox {
    color: ${(props) => props.theme.colors.darkestGray};
    height: 100%;
    justify-content: center;
    .title {
      font-size: 25px;
      h2 {
        font-size: 38px;
        font-weight: 800;
        padding: 0px;
      }
      h3 {
        font-size: 39px;
        font-weight: 600;
        font-style: italic;
        margin-bottom: 10px;
      }
      p {
        font-size: 16px;
        font-weight: 400;
        b {
          font-weight: 600;
        }
      }
    }
  }

  @media only screen and (max-width: ${(props) =>
      props.theme.breakpoints.md}px) {
    padding: 10%;
    .textBox {
      .title {
        h3 {
          width: 100%;
          text-align: center;
        }
      }
      p {
        font-size: ;
      }
    }
  }
`;

export default MetodologiasStyled;
