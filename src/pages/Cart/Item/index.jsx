import React, { useState } from "react";
import { Quantity, Button, Modal } from "../../../components";
import { useChangeCart } from "../../../hooks";

import * as S from "./style";

const Item = ({ item }) => {
  const [showModal, setShowModal] = useState(false);
  const [observation, setObservation] = useState("");
  const { addObservation } = useChangeCart();

  function currency(value) {
    return `R$ ${value.toLocaleString("pr-br", {
      minimumFractionDigits: 2,
    })}`;
  }

  function onSaveObservation() {
    addObservation(item, observation);
    setShowModal(false);
  }

  return (
    <S.Item>
      <S.QuantityCotainer>
        <Quantity item={item} cartStyle />
      </S.QuantityCotainer>
      <S.ImgContainer>
        <img
          src={require(`../../../assets/images/${item.id}.png`)}
          alt={`${item.name}`}
        />
      </S.ImgContainer>
      <S.TextContainer>
        <h3>{item.name}</h3>
        <Button variant="link" onClick={() => setShowModal(true)}>
          Adicionar observação
        </Button>
        <p>{item.observation}</p>
      </S.TextContainer>
      <S.Price>{currency(item.price)}</S.Price>

      <Modal
        title={"Adicionar observação"}
        show={showModal}
        onClose={() => setShowModal(false)}
      >
        <S.ModalContent>
          <textarea
            rows="8"
            onChange={(e) => setObservation(e.target.value)}
            value={observation || item.observation}
          />
          <Button variant="outlined" onClick={() => setShowModal(false)}>
            Cancelar
          </Button>
          <Button onClick={onSaveObservation}>Salvar</Button>
        </S.ModalContent>
      </Modal>
    </S.Item>
  );
};

export default Item;
