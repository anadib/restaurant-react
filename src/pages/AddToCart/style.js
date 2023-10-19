import styled from "styled-components";

export const AddToCartWrapper = styled.div`
  background: ${({ theme }) => theme.colors.bgColor};
  padding: 50px 20px;

  @media ${({ theme }) => theme.medias.smartphones} {
    background: white;
    padding: 35px 20px;
  }
`;

export const AddToCart = styled.div`
  background: white;
  width: 100%;
  max-width: 600px;
  margin: 30px auto 0;
  border-radius: 8px;
  padding: 20px;

  p:nth-child(4) {
    font-weight: 600;
    font-size: 16px;
  }

  textarea {
    border: 1px solid ${({ theme }) => theme.colors.lightGrey};
    width: 100%;
    border-radius: 8px;
  }

  @media ${({ theme }) => theme.medias.smartphones} {
    margin-top: 10px;
  }
`;

export const Title = styled.h2`
  font-weight: 600;
  font-size: 22px;
  margin: 0 0 20px;
`;

export const LinkContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  margin-bottom: 20px;

  a {
    font-weight: 600;
    font-size: 18px;
    text-decoration: none;
    color: black;
    display: inline-block;
  }

  @media ${({ theme }) => theme.medias.smartphones} {
    margin-bottom: 0;

    a {
      font-size: 16px;
    }
  }
`;

export const QuantityContainer = styled.div`
  display: flex;
  padding: 10px 20px;
  border: 1px solid ${({ theme }) => theme.colors.lightGrey};
  border-radius: 8px;
  margin: 20px 0;

  span {
    font-weight: 600;
    font-size: 16px;
    margin-right: auto;
  }
`;

export const ButtonWrapper = styled.div`
  button {
    display: block;
    margin: 30px auto;
  }

  @media ${({ theme }) => theme.medias.smartphones} {
    button {
      width: 100%;
      max-width: unset;
    }
  }
`;
