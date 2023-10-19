import styled, { css } from "styled-components";

export const OrderForm = styled.div`
  max-width: 720px;
  margin: 30px auto;
  background: white;
  border-radius: 8px;
  padding: 30px 50px;

  form {
    display: flex;
    flex-direction: column;
  }

  @media ${({ theme }) => theme.medias.smallDesktop} {
    width: 100%;
    max-width: 600px;
    padding: 20px;
  }

  @media ${({ theme }) => theme.medias.smartphones} {
    padding: 0 20px;
    margin-bottom: 0;
  }
`;

export const SectionTitle = styled.p`
  font-weight: 600;
  font-size: 22px;
  margin-bottom: 14px;
  margin-top: 30px;
`;

export const InputField = styled.div`
  display: flex;
  flex-direction: column;

  label {
    font-weight: 500;
    font-size: 14px;
    margin-bottom: 5px;
  }

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

export const UserData = styled.div`
  div + div {
    margin-top: 15px;
  }

  @media ${({ theme }) => theme.medias.smallDesktop} {
    p {
      margin-top: 0;
    }
  }
`;

export const Adress = styled.div`
  button {
    color: ${({ theme }) => theme.colors.pink};
    margin-top: 9px;
    font-size: 12px;
    font-weight: normal;
    text-decoration: underline;
    width: unset;
    padding-left: 0;
    height: 19px;
    display: block;
  }
`;

export const AdressCard = styled.div`
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.darkGrey};
  padding: 10px 15px;
  margin: 15px 0;
  width: fit-content;

  p {
    font-weight: normal;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.darkGrey};
    margin: 5px 0;
  }
`;

export const RadioContainer = styled.div`
  display: flex;

  div {
    display: flex;
    align-items: center;

    input {
      margin: 0;
    }

    label {
      padding-left: 10px;
      margin: 0;
      font-size: 14px;
    }
  }

  div + div {
    margin-left: 25px;
  }
`;

export const Payment = styled.div``;

export const ButtonWrapper = styled.div`
  button {
    margin: 30px 0;
    width: fit-content;
  }

  @media ${({ theme }) => theme.medias.smallDesktop} {
    button {
      width: 100%;
    }
  }

  @media ${({ theme }) => theme.medias.smartphones} {
    button {
      margin-bottom: 0;
    }
  }
`;
