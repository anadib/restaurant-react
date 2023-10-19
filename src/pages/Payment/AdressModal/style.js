import styled, { css } from "styled-components";

export const ModalWrapper = styled.div`
  h2 {
    text-align: left;
    margin-bottom: 15px;
  }
`;

export const AdressModalContent = styled.form`
  label {
    font-weight: 500;
    font-size: 14px;
    margin-bottom: 5px;
  }
`;

export const InputField = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;

  ${(props) =>
    props.error &&
    css`
      input[type="text"] {
        border: 1px solid ${({ theme }) => theme.colors.errorColor};

        &::placeholder {
          color: ${({ theme }) => theme.colors.errorColor};
        }
      }

      p {
        font-size: 12px;
        color: ${({ theme }) => theme.colors.errorColor};
        margin-bottom: 0;
        margin-top: 8px;
      }
    `};
`;

export const InputContainer = styled.div`
  display: flex;

  div {
    margin: 0;
    width: 100%;

    & + div {
      width: 30%;
      margin-left: 15px;
    }
  }

  @media ${({ theme }) => theme.medias.smartphones} {
    div {
      & + div {
        margin-left: 5px;
      }
    }
  }
`;

export const ButtonContainer = styled.div`
  button {
    width: calc(50% - 10px);
    text-align: center;
    margin-top: 30px;

    & + button {
      margin-left: 20px;
    }
  }

  @media ${({ theme }) => theme.medias.smartphones} {
    button {
      width: calc(50% - 2.5px);
      padding: 8px 0;

      & + button {
        margin-left: 5px;
      }
    }
  }
`;
