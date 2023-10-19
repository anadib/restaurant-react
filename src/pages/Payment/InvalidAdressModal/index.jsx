import React from "react";
import Modal from "../../../components/Modal";
import { AlertTriangle } from "feather-icons-react";

import * as S from "./style";

const InvalidAdressModal = ({ onShow, onClose }) => {
  return (
    <Modal show={onShow} onClose={onClose}>
      <S.InvalidAdressModalContent>
        <AlertTriangle />
        <p>Na modalidade delivery é necessário adicionar um endereço válido.</p>
      </S.InvalidAdressModalContent>
    </Modal>
  );
};

export default InvalidAdressModal;
