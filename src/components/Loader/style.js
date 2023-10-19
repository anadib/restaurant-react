import styled, { css } from "styled-components";

const commonStyles = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
`;

export const LoaderContainer = styled.div`
  background: ${({ theme }) => theme.colors.darkGrey};
  opacity: 0.8;

  ${commonStyles}
`;

export const Blur = styled.div`
  ${commonStyles};
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  backdrop-filter: blur(3px);
`;

export const Loader = styled.div`
  width: 50px;
  height: 50px;
  border: 3px solid ${({ theme }) => theme.colors.lightYellow};
  border-radius: 50%;
  border-top-color: ${({ theme }) => theme.colors.yellow};
  animation: spin 1s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;
