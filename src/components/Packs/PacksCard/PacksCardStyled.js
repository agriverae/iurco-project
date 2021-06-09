import styled from "styled-components";

const PacksCardStyled = styled.div`
  background-color: ${(props) => props.theme.colors.blue};
  margin-right: 15px;
  padding: 11px;
  width: ${(props) => props.width};
  border-radius: 15px;

  .p {
    font-weight: 800;
  }
  .number {
    color: ${(props) => props.theme.colors.cyan};
    font-weight: 700;
    //order:1;
    //margin-rigth:auto;
  }
  .text {
    color: ${(props) => props.theme.colors.white};
    font-weight: 700;
    font-size: 18px;
    //width: min-content;
    //order:3;
  }
  img {
    //order:2
  }
`;

export default PacksCardStyled;
