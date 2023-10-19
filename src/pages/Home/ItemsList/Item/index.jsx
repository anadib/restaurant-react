import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useChangeCart, useDeviceSize } from "../../../../hooks";
import AplicationContext from "../../../../contexts/aplicationContext";

import * as S from "./style";

const Item = ({ item, addToCartStyle }) => {
  const navigate = useNavigate();
  const isSmallDesktop = useDeviceSize();
  const { addToCart } = useChangeCart();
  const { setSellectedItem } = useContext(AplicationContext);

  function onAddToCart() {
    if (!isSmallDesktop) {
      addToCart(item);
      return;
    }

    setSellectedItem({ ...item, quantity: 1 });
    navigate(`/addToCart/${item.id}`);
  }

  function rederImg() {
    if (!item?.id) return;
    return (
      <img
        src={require(`../../../../assets/images//${item.id}.png`)}
        alt={`${item.name}`}
      />
    );
  }

  function currency(value) {
    if (!value) return;
    return `R$ ${value.toLocaleString("pr-br", {
      minimumFractionDigits: 2,
    })}`;
  }

  return (
    <S.Item onClick={onAddToCart} addToCartStyle={addToCartStyle}>
      <S.ImgContainer>
        {item.offer && <div>Oferta</div>}
        {rederImg()}
      </S.ImgContainer>
      <S.TextContainer>
        <h2>{item.name}</h2>
        <p>{item.description}</p>
        <p>{currency(item.price)}</p>
      </S.TextContainer>
    </S.Item>
  );
};

export default Item;
