import styled from "styled-components";

const AsesoramientosStyled = styled.div`
  background-color: ${(props) => props.theme.colors.cyan};
  display: flex;
  padding: 40px 20px 40px 240px;
  border-bottom: 2px solid yellow;

  @media only screen and (max-width: ${(props) =>
      props.theme.breakpoints.md}px) {
    padding: 6%;
    background-color: ${(props) => props.theme.colors.white};
  }
`;

export default AsesoramientosStyled;
