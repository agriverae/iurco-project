import styled from "styled-components";

const ArrowSliderStyled = styled.div`
  // esto es igual a .slick-next en la pagina
  //background-color: pink;

  right: 0px;
  border: solid ${(props) => props.theme.colors.darkCyan};
  transform: rotate(45deg);
  height: 12px;
  width: 12px;

  & :before {
    display: none;
  }

  border-width: ${(props) => (props.side ? "3px 3px 0 0" : "0 0 3px 3px ")};
`;
export default ArrowSliderStyled;
