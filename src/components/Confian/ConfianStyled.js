import styled from "styled-components";

const ConfianStyled = styled.div`
  margin: 50px 90px;
  h2 {
    font-size: 38px;
    font-weight: 800;
    width: 225px;
    color: ${(props) => props.theme.colors.darkCyan};
  }
  //.cajaimagen {
    //display: flex;
    //width: 100%;
    //height: 100%;
  }

  //--------------------------------------------------
  @media only screen and (max-width: ${(props) =>
    props.theme.breakpoints.md}px) {
  }
`;

export default ConfianStyled;
