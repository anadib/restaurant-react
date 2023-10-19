import styled from "styled-components";

export const CategoryMenu = styled.nav`
  width: 110px;
  min-width: 110px;
  min-height: 100vh;
  background: white;
  display: flex;
  align-items: baseline;
  padding-top: 30px;

  ul {
    list-style: none;
    padding: 0;
    width: 100%;
    margin: 20px 0;

    li {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 95px;
      cursor: pointer;

      p {
        margin-bottom: 0px;
        font-weight: 500;
        font-size: 12px;
        color: ${({ theme }) => theme.colors.darkGrey};
        margin-top: 5px;
      }

      svg {
        path {
          fill: ${({ theme }) => theme.colors.darkGrey};
        }
      }

      &.active {
        background: ${({ theme }) => theme.colors.yellow};
        border-radius: 8px;

        p {
          color: black;
        }

        svg {
          path {
            fill: black;
          }
        }
      }
    }
  }

  @media ${({ theme }) => theme.medias.smallDesktop} {
    width: 100%;
    max-width: 730px;
    height: fit-content;
    margin: auto;
    align-items: center;
    min-height: unset;
    padding-top: 0;
    border-radius: 8px;

    ul {
      display: flex;
      margin: 20px;
      justify-content: space-around;

      li {
        min-width: 78px;
        margin: 0;
        padding: 0 15px;
        width: 100%;
      }
    }
  }

  @media ${({ theme }) => theme.medias.smartphones} {
    ul {
      justify-content: unset;
      overflow-x: scroll;
    }
  }
`;
