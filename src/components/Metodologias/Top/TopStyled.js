import styled from "styled-components";

const TopStyled = styled.div`
  background-color: ${(props) => props.theme.colors.cyan};
  display: flex;
  padding: 50px 100px 65px 100px;
  width: 100%;

  .textBox {
    color: ${(props) => props.theme.colors.darkestGray};
    height: 100%;
    justify-content: center;
    .title {
      font-size: 25px;
      h2 {
        font-size: 38px;
        font-weight: 800;
        padding: 0px;
      }
      h3 {
        font-size: 39px;
        font-weight: 600;
        font-style: italic;
        margin-bottom: 10px;
      }
    }
    p {
      font-size: 16px;
      font-weight: 500;
    }
  }
  .imgBoxMobile {
    display: none;
  }
  @media only screen and (max-width: ${(props) =>
      props.theme.breakpoints.md}px) {
    padding: 10%;
    flex-direction: column;
    .textBox {
      p {
        font-size: 18px;
      }
      .title {
        text-align: center;
        h3 {
          width: 100%;
        }
      }
    }
    .imgBoxMobile {
      display: block;

      img {
        margin-top: 50px;
        height: 70px;
      }
    }
  }
`;

export default TopStyled;
