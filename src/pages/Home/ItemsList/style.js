import styled from "styled-components";

export const ItemsList = styled.div`
  width: 100%;
  margin: 30px 50px;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;

  @media ${({ theme }) => theme.medias.smallDesktop} {
    width: 100%;
    max-width: 800px;
    margin: 50px auto;
    justify-content: center;
  }

  @media ${({ theme }) => theme.medias.smartphones} {
    margin: 0px;
    padding: 20px;
  }
`;
