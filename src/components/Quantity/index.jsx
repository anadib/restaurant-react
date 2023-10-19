import React, { useState } from "react";
import { useChangeCart } from "../../hooks";
import { Button, Modal } from "..";

import * as S from "./style.js";

const Quantity = ({ item, doNotRemoveFromCart, addToCartStyle, cartStyle }) => {
  const { decreaseQuantity, increaseQuantity, removeItem } = useChangeCart();
  const [showModal, setShowModal] = useState(false);

  function onDecreaseQuantity() {
    if (item.quantity === 1) {
      setShowModal(true);
      return;
    }

    decreaseQuantity(item);
  }

  function onIncreaseQuantity() {
    increaseQuantity(item);
  }

  function onRemoveItem() {
    setShowModal(false);
    removeItem(item);
  }

  return (
    <S.Quantity addToCartStyle={addToCartStyle} cartStyle={cartStyle}>
      <Button
        onClick={onDecreaseQuantity}
        variant="link"
        disabled={item.quantity === 0 || doNotRemoveFromCart}
      >
        -
      </Button>
      <span>{item.quantity}</span>
      <Button onClick={onIncreaseQuantity} variant="link">
        +
      </Button>

      <Modal
        title={"Deseja remover esse item do carrinho?"}
        show={showModal}
        onClose={() => setShowModal(false)}
      >
        <S.ModalContent>
          <Button variant="outlined" onClick={() => setShowModal(false)}>
            Cancelar
          </Button>
          <Button primary onClick={onRemoveItem}>
            Sim, remover
          </Button>
        </S.ModalContent>
      </Modal>
    </S.Quantity>
  );
};

export default Quantity;
