import styled from "styled-components";

const FooterStyled = styled.footer`
  padding: 14px 20px;
  background-color: ${(props) => props.theme.colors.blue};
  display: flex;
  align-items: center;
  justify-content: center;

  .imgCont {
    width: 145px;
    svg {
      width: 100%;
      min-width: 90px;
      height: auto;
    }
  }
  .footerNav {
    display: flex;
    ul {
      list-style-type: none;
      display: flex;
      padding: 0 10px;

      li {
        display: flex;
        align-items: center;

        a {
          color: ${(props) => props.theme.colors.white};
          text-decoration: none;
          padding: 0 15px;
          font-size: 14px;
          font-weight: bold;
          text-align: center;
        }
      }

      li ~ li {
        border-left: 2px solid ${(props) => props.theme.colors.white};
      }
    }
  }
  .socialSection {
    display: flex;
    align-items: center;

    a ~ a {
      padding-left: 14px;
      margin-left: auto;
    }
  }

  @media only screen and (max-width: ${(props) =>
      props.theme.breakpoints.md}px) {
    justify-content: space-between;
    .footerNav {
      display: none;
    }

    .imgCont {
      width: 130px;
    }

    .socialSection {
      width: 30%;
      justify-content: space-between;

      a {
        width: 20px;

        &.facebook {
          width: 12px;
        }

        svg {
          width: 100%;
          height: auto;
        }
      }

      a ~ a {
        padding-left: 0px;
        margin-left: 0;
      }
    }
  }
`;

export default FooterStyled;
