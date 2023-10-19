import styled from "styled-components";

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
`;

export const Modal = styled.div`
  position: absolute;
  background: white;
  padding: 30px;
  width: 600px;
  border-radius: 8px;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);

  h2 {
    text-align: center;
    font-size: 22px;
    font-weight: bold;
    margin-top: 0;
  }

  @media ${({ theme }) => theme.medias.tablets} {
    width: 90%;
    padding: 15px;
  }
`;

export const ButtonWrapper = styled.div`
  text-align: right;

  button {
    padding: 0;
  }
`;
