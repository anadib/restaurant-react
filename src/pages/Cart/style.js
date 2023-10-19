import styled from "styled-components";

export const StyledGrid = styled.div`
  .transition-enter {
    opacity: 0;
    transform: translateX(-30px);
  }

  .transition-enter-active {
    opacity: 1;
    transform: translateX(0);
    transition: all 300ms ease-in;
  }

  .transition-exit {
    opacity: 1;
    transform: translateX(0);
  }

  .transition-exit-active {
    opacity: 0;
    transform: translateX(-30px);
    transition: all 300ms ease-in;
  }
`;

export const CartListWrapper = styled.div`
  background: white;

  @media ${({ theme }) => theme.medias.smallDesktop} {
    background: ${({ theme }) => theme.colors.bgColor};
    padding: 50px 20px;
  }

  @media ${({ theme }) => theme.medias.smartphones} {
    background: white;
    padding: 35px 20px;
  }
`;

export const LinkContainer = styled.div`
  a {
    font-weight: 600;
    font-size: 18px;
    text-decoration: none;
    color: black;
    margin-bottom: 20px;
  }
  @media ${({ theme }) => theme.medias.smallDesktop} {
    max-width: 600px;
    margin: 0 auto;
  }

  @media ${({ theme }) => theme.medias.smartphones} {
    a {
      font-size: 16px;
    }
  }
`;

export const CartList = styled.div`
  width: 485px;
  min-width: 485px;
  min-height: 100vh;
  padding: 50px 30px 50px 30px;
  display: flex;
  flex-direction: column;

  h2 + p {
    padding-top: 16px;
  }

  @media ${({ theme }) => theme.medias.smallDesktop} {
    width: 100%;
    max-width: 600px;
    min-width: unset;
    padding: 20px 20px 50px 20px;
    margin: 30px auto;
    min-height: unset;
    border-radius: 8px;
    background: white;
    margin: 30px auto 0;
  }

  @media ${({ theme }) => theme.medias.smartphones} {
    margin-top: 10px;
  }
`;

export const Title = styled.h2`
  font-weight: 600;
  font-size: 22px;
  margin-top: 0;

  @media ${({ theme }) => theme.medias.smallDesktop} {
    font-size: 22px;
  }

  @media ${({ theme }) => theme.medias.smartphones} {
    margin: 0 0 20px;
  }
`;

export const CartContent = styled.div`
  overflow: auto;

  @media ${({ theme }) => theme.medias.smallDesktop} {
    flex-grow: 1;
    height: 100%;
  }
`;

export const TotalPrice = styled.div`
  font-weight: 600;
  font-size: 17px;
  text-align: right;
  margin: 30px 0 20px;

  span:nth-child(2) {
    color: ${({ theme }) => theme.colors.yellow};
    padding-left: 10px;
  }
`;
