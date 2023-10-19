import styled, { css } from "styled-components";

export const Button = styled.button`
  font-weight: 600;
  cursor: pointer;

  ${({ variant }) =>
    variant === "contained" &&
    css`
      width: 100%;
      font-size: 15px;
      font-weight: 600;
      background: ${({ theme }) => theme.colors.pink};
      border-radius: 8px;
      border: 0;
      color: white;
      padding: 8px 35px;
      cursor: pointer;

      @media ${({ theme }) => theme.medias.tablets} {
        padding: 8px 20px;
      }
    `}

  ${({ variant }) =>
    variant === "outlined" &&
    css`
      width: 100%;
      font-size: 15px;
      font-weight: 600;
      background: white;
      border-radius: 8px;
      border: 1px solid black;
      color: black;
      padding: 8px 35px;
      cursor: pointer;

      @media ${({ theme }) => theme.medias.smartphones} {
        padding: 8px 20px;
      }
    `}
    ${({ variant }) =>
    variant === "link" &&
    css`
      background: none;
      border: 0;
      font-weight: 600;
      font-size: 16px;
      cursor: pointer;
      text-decoration: none;

      &:focus {
        outline: 0;
      }
    `};
`;
