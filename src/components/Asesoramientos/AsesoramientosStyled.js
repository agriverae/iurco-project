import styled from "styled-components";

const AsesoramientosStyled = styled.div`
  background-color: ${(props) => props.theme.colors.cyan};
  //display: flex;
  padding: 40px 20px 40px 240px;
  border-bottom: 2px solid yellow;

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
        height: 15px;
        width: 15px;
        border-radius: 7.5px;
      }

      &.slick-active button {
        background: ${(props) => props.theme.colors.cyan};
      }
    }
  }
  @media only screen and (max-width: ${(props) =>
      props.theme.breakpoints.md}px) {
    padding: 4%;
    background-color: ${(props) => props.theme.colors.white};
  }
`;

export default AsesoramientosStyled;
