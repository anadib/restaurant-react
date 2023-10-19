import styled, { css } from "styled-components";

export const Quantity = styled.div`
  display: flex;
  align-items: center;
  padding-right: 20px;

  span {
    font-weight: 500;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.yellow};
    width: 24px;
    text-align: center;
  }

  ${(props) =>
    props.addToCartStyle &&
    css`
      padding-right: 0;
    `}

  @media ${({ theme }) => theme.medias.tablets} {
    ${(props) =>
      props.cartStyle &&
      css`
        padding: 0;
        width: 70px;
        justify-content: center;
      `}
  }
`;

export const ModalContent = styled.div`
  display: flex;
  justify-content: center;

  button {
    margin-left: 10px;
    margin-top: 20px;
    width: unset;
  }

  @media ${({ theme }) => theme.medias.tablets} {
    button {
      padding: 8px 20px;
    }
  }
`;
