import styled from "styled-components";

const PacksStyled = styled.div`
  background-color: ${(props) => props.theme.colors.ligthGgray};
  padding: 50px 5px 50px 86px;
  .title {
    h2 {
      color: ${(props) => props.theme.colors.darkCyan};
      width: 200px;
      font-size: 32px;
    }
  }
  .cards {
    display: flex;
  }
`;

export default PacksStyled;
