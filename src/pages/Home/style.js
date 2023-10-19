import styled from "styled-components";

export const Home = styled.div`
  display: flex;

  @media ${({ theme }) => theme.medias.smallDesktop} {
    flex-direction: column;
  }
`;

export const LinkContainer = styled.div`
  a {
    width: 42px;
    height: 42px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.pink};
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px 20px 20px auto;
  }
`;
