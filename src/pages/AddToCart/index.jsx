import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useChangeCart, useDeviceSize } from "../../hooks";
import AplicationContext from "../../contexts/aplicationContext";
import { Quantity, Button } from "../../components";
import Item from "../Home/ItemsList/Item";
import { ReactComponent as Arrow } from "../../assets/icons/arrow.svg";

import * as S from "./style.js";

const AddToCart = () => {
  const isSmallDesktop = useDeviceSize();
  const { sellectedItem } = useContext(AplicationContext);
  const [observation, setObservation] = useState("");
  const navigate = useNavigate();
  const { addToCart } = useChangeCart();

  function addToCartOnButtonClick() {
    const selectedItemWithObservation = {
      ...sellectedItem,
      observation: observation,
    };
    addToCart(selectedItemWithObservation);
    navigate("/");
  }

  return (
    <S.AddToCartWrapper>
      {isSmallDesktop && (
        <S.LinkContainer>
          <Link to="/">
            <Arrow />
            Voltar
          </Link>
        </S.LinkContainer>
      )}
      <S.AddToCart>
        <S.Title>Adicionar ao carrinho</S.Title>
        <Item item={sellectedItem} addToCartStyle />
        <S.QuantityContainer>
          <span>Quantidade</span>
          <Quantity
            item={sellectedItem}
            addToCartStyle
            doNotRemoveFromCart={sellectedItem.quantity === 1}
          />
        </S.QuantityContainer>
        <p>Observações</p>
        <textarea
          rows="4"
          onChange={(e) => setObservation(e.target.value)}
          value={observation}
        />
        <S.ButtonWrapper>
          <Button onClick={addToCartOnButtonClick}>
            Adicionar ao carrinho
          </Button>
        </S.ButtonWrapper>
      </S.AddToCart>
    </S.AddToCartWrapper>
  );
};

export default AddToCart;
