import styled, { css } from "styled-components";

export const Item = styled.div`
  width: 216px;
  height: 250px;
  border-radius: 8px;
  background: white;
  position: relative;
  margin: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  cursor: pointer;

  ${(props) =>
    props.addToCartStyle &&
    css`
      margin: 30px auto 0;
      border: 1px solid ${({ theme }) => theme.colors.lightGrey};
    `}

  @media ${({ theme }) => theme.medias.smartphones} {
    width: 100%;
    height: fit-content;
    border: 1px solid ${({ theme }) => theme.colors.lightGrey};
    display: flex;
    flex-direction: row;
    margin: 10px 0;
    padding: 10px 20px;

    ${(props) =>
      props.addToCartStyle &&
      css`
        margin-top: 30px;
      `}
  }
`;

export const ImgContainer = styled.div`
  div {
    position: absolute;
    background: ${({ theme }) => theme.colors.pink};
    border-radius: 12px;
    color: white;
    top: 15px;
    right: 15px;
    font-weight: 500;
    font-size: 12px;
    padding: 3px 8px;
  }

  img {
    display: block;
    margin: auto;
    width: 65%;
  }

  @media ${({ theme }) => theme.medias.smartphones} {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-right: 10px;

    div {
      position: static;
      order: 1;
      width: fit-content;
    }

    img {
      width: 86px;
      order: 0;
      margin-bottom: 10px;
      margin-top: 0;
    }
  }
`;

export const TextContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 10px;

  h2 {
    font-weight: 600;
    font-size: 16px;
    margin: 0;
  }

  p:nth-of-type(1) {
    color: ${({ theme }) => theme.colors.darkGrey};
    font-weight: 300;
    font-size: 12px;
    margin: 0;
  }

  p:nth-of-type(2) {
    color: ${({ theme }) => theme.colors.yellow};
    font-weight: 600;
    font-size: 18px;
    margin: 0;
  }

  @media ${({ theme }) => theme.medias.smartphones} {
    flex-grow: 1;

    p:nth-of-type(2) {
      text-align: right;
      margin: 5px 0 0 auto;
    }
  }
`;
