import styled from "styled-components";
import cohete from "@/images/cohete.png";
const CardAsesoramientosStyled = styled.div`
  display: flex;
  max-width: 350px;
  height: 200px;
  background-image: ${cohete};
  margin-left: 20px;
  padding-bottom: 20px;
  .textBox {
    height: 250px;
    width: 220px;
    flex-direction: column;

    align-items: space-between;
    h3 {
      font-size: 28px;
      font-weight: 800;
      color: ${(props) => props.theme.colors.darkCyan};
      padding-bottom: 12px;
    }
    ul {
      width: 220px;
      li {
        color: ${(props) => props.theme.colors.darkCyan};
        font-size: 13px;
        font-weight: 500;
        list-style: none;
        padding-bottom: 5px;
        //list-style-image: ;
      }
    }
    div {
      button {
        display: flex;
        align-items: center;
        margin-top: 20px;
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
  }
  .cohete {
    img {
      width: 85px;
    }
  }
`;

export default CardAsesoramientosStyled;
