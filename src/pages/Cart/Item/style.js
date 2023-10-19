import styled from "styled-components";

export const Item = styled.div`
  display: flex;
  padding: 20px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGrey};

  @media ${({ theme }) => theme.medias.tablets} {
    flex-wrap: wrap;
    padding: 12px;
    border: 1px solid ${({ theme }) => theme.colors.lightGrey};
    border-radius: 8px;
    margin-top: 15px;
  }
`;

export const QuantityCotainer = styled.div`
  display: flex;
  align-items: center;

  @media ${({ theme }) => theme.medias.tablets} {
    order: 3;
  }
`;

export const ImgContainer = styled.div`
  background: ${({ theme }) => theme.colors.lightYellow};
  border-radius: 8px;
  width: 70px;
  height: 66px;
  display: flex;
  align-items: center;

  img {
    width: 65px;
    display: block;
    margin: auto;
  }

  @media ${({ theme }) => theme.medias.tablets} {
    order: 1;
  }
`;

export const TextContainer = styled.div`
  flex-grow: 1;
  padding: 0 20px;

  h3 {
    font-weight: 600;
    font-size: 14px;
    margin: 0;
  }

  button {
    color: ${({ theme }) => theme.colors.darkGrey};
    font-weight: 500;
    font-size: 12px;
    padding: 0;
    text-decoration: underline;
    cursor: pointer;
  }

  p {
    font-size: 11px;
    color: ${({ theme }) => theme.colors.darkGrey};
    margin-bottom: 0;
    margin-top: 5px;
    word-break: break-all;
  }

  @media ${({ theme }) => theme.medias.tablets} {
    order: 2;
    width: calc(100% - 70px);
  }
`;

export const Price = styled.p`
  font-weight: 600;
  font-size: 16px;
  line-height: 27px;
  color: ${({ theme }) => theme.colors.yellow};
  min-width: 80px;
  text-align: right;

  @media ${({ theme }) => theme.medias.tablets} {
    order: 4;
    padding: 0 20px;
    margin: 0;
  }
`;

export const ModalContent = styled.div`
  text-align: center;

  textarea {
    width: 80%;
    margin-bottom: 20px;
  }

  button {
    width: unset;
  }

  button + button {
    margin-left: 15px;
  }
`;
