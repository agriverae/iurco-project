import styled from "styled-components";

const ImageCardStyled = styled.div`
  display: flex;
  align-items: center;

  .imageBox {
    img {
      height: ${(props) => props.imageHeight || "65px"};
    }
  }

  .description {
    max-width: ${(props) => props.maxWidthDesc};
    margin-left: 10px;
    p {
      font-weight: 600;
      color: ${(props) => props.theme.colors.darkestGray};
    }
  }

  @media only screen and (max-width: ${(props) =>
      props.theme.breakpoints.md}px) {
    flex-direction: column;

    .imageBox {
      img {
        height: 120%;
        padding-bottom: 15px;
      }
    }

    .description {
      margin-left: 0;
      text-align: center;
      p {
        font-size: 20px;
      }
    }
  }
`;
export default ImageCardStyled;
