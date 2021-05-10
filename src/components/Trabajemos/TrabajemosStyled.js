import styled from "styled-components";

const TrabajemosStyled = styled.div`
  background-image: url(/images/office.png);
  background-position-y: 50%;
  background-repeat: no-repeat;
  background-size: 107%;

  div {
    background-color: rgba(35, 73, 226, 0.5);
    padding: 90px 0 95px 0;
    text-align: center;
    color: ${(props) => props.theme.colors.white};

    h2 {
      font-size: 40px;
      max-width: 55%;
      font-weight: 500;
      padding-bottom: 3%;
      margin: 0 auto;

      span {
        display: block;
      }
    }
    button {
      background: ${(props) => props.theme.colors.blue};
      border-radius: 11px;
      border: ${(props) => props.theme.colors.white} 3px solid;
      padding: 10px 20px;
      color: ${(props) => props.theme.colors.white};
      font-weight: bold;
    }
  }
  @media only screen and (max-width: ${(props) =>
      props.theme.breakpoints.md}px) {
    background-size: 175%;
    background-position: center;
    background-position-y: 61%;
    div {
      padding: 65px 0;
      h2 {
        font-size: 30px;
        max-width: 77%;
        padding-bottom: 5%;
      }
      button {
        background: transparent;
        padding: 22px 10px;
        font-size: 25px;
        border-radius: 20px;
        width: 80%;
        max-width: 450px;
      }
    }
  }
  @media only screen and (max-width: ${(props) =>
      props.theme.breakpoints.xs}px) {
    div {
      h2 {
        margin-bottom: 20px;
      }
    }
  }
`;

export default TrabajemosStyled;
