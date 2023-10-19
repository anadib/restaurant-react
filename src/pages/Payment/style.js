import styled from "styled-components";

export const LinkContainer = styled.div`
  max-width: 720px;
  margin: 0 auto;
  margin-bottom: 20px;

  a {
    font-weight: 600;
    font-size: 18px;
    text-decoration: none;
    color: black;
    display: inline-block;
  }

  @media ${({ theme }) => theme.medias.smallDesktop} {
    max-width: 600px;
  }

  @media ${({ theme }) => theme.medias.smartphones} {
    margin-bottom: 0;

    a {
      font-size: 16px;
    }
  }
`;

export const PaymentWrapper = styled.div`
  display: flex;
`;

export const Payment = styled.div`
  flex-grow: 1;
  padding: 50px;

  @media ${({ theme }) => theme.medias.smallDesktop} {
    padding: 50px 20px;
  }

  @media ${({ theme }) => theme.medias.smartphones} {
    padding: 35px 20px;
  }
`;
