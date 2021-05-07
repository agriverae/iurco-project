import styled from "styled-components";
import ImageCardStyled from "../ImageCard/ImageCardStyled";

const BottomStyled = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px 176px;

  ${ImageCardStyled} ~ ${ImageCardStyled} {
    margin-left: 40px;
  }

  @media only screen and (max-width: ${(props) =>
      props.theme.breakpoints.md}px) {
    display: block;
    padding: 20px 50px;
    ${ImageCardStyled} ~ ${ImageCardStyled} {
      margin: 30px auto 0 auto;
    }

    .alineamiento .description {
      max-width: 300px;
    }
    .productividad .description {
      max-width: 140px;
    }
  }
`;
export default BottomStyled;
