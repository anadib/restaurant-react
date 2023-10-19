import React from "react";
import Modal from "../../../components/Modal";
import { AlertTriangle } from "feather-icons-react";

import * as S from "./style";

const EmptyCartModal = ({ onShow, onClose }) => {
  return (
    <Modal show={onShow} onClose={onClose}>
      <S.EmptyCartModalContent>
        <AlertTriangle />
        <p>
          O carrinho ainda está vazio, adicione um produto para concluir o
          pedido.
        </p>
      </S.EmptyCartModalContent>
    </Modal>
  );
};

export default EmptyCartModal;
