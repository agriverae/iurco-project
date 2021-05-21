import styled from "styled-components";
import cohete from "@/images/cohete.png";

const CardAsesoramientosStyled = styled.div`
  display: flex;
  max-width: 350px;
  height: 220px;
  background-image: ${cohete};
  margin-left: 20px;
  padding-bottom: 20px;

  .textBox {
    height: 100%;
    width: 220px;
    flex-direction: column;
    display: flex;
    align-items: baseline;

    h3 {
      font-size: 28px;
      font-weight: 800;
      color: ${(props) => props.theme.colors.darkCyan};
      padding-bottom: 12px;
    }

    li {
      color: ${(props) => props.theme.colors.darkCyan};
      font-size: 13px;
      font-weight: 500;
      list-style: none;
      padding-bottom: 5px;
    }

    button {
      display: flex;
      align-items: center;
      margin-top: auto;
      padding: 10px 15px;
      background-color: ${(props) => props.theme.colors.darkCyan};
      color: ${(props) => props.theme.colors.white};
      font-weight: 600;
      border-radius: 10px;
      border: none;

      img {
        padding-left: 10px;
      }
    }
  }
  .cohete {
    img {
      width: 85px;
    }
  }
`;

export default CardAsesoramientosStyled;
