import React, { useContext, useState, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Link } from "react-router-dom";
import { useDeviceSize } from "../../hooks";
import AplicationContext from "../../contexts/aplicationContext";
import Item from "./Item";
import Button from "../../components/Button";
import { useLocation } from "react-router-dom";
import { ReactComponent as Arrow } from "../../assets/icons/arrow.svg";

import * as S from "./style";

const CartList = () => {
  const nodeRef = React.useRef(null);
  const { cartList } = useContext(AplicationContext);
  const isSmallDesktop = useDeviceSize();
  const hasNoItem = !cartList.length;
  const [price, setPrice] = useState(0);
  const location = useLocation();

  function currency(value) {
    return `R$ ${value.toLocaleString("pr-br", {
      minimumFractionDigits: 2,
    })}`;
  }

  useEffect(() => {
    setPrice(
      cartList.reduce((acc, item) => {
        return acc + item.price * item.quantity;
      }, 0)
    );
  }, [cartList]);

  const goToPayment = () => {
    window.scroll(0, 0);
  };

  const isPaymentScreen = () => {
    return location.pathname === "/payment";
  };

  return (
    <S.CartListWrapper>
      {isSmallDesktop && (
        <S.LinkContainer>
          <Link to="/">
            <Arrow />
            Voltar
          </Link>
        </S.LinkContainer>
      )}
      <S.CartList>
        <S.CartContent>
          <S.Title>Seu pedido</S.Title>
          {hasNoItem && <p>Seu carrinho ainda está vazio :(</p>}
          <TransitionGroup component={S.StyledGrid}>
            {cartList.map((item) => (
              <CSSTransition
                key={item.id}
                nodeRef={nodeRef}
                in
                timeout={300}
                classNames="transition"
              >
                <div ref={nodeRef}>
                  <Item item={item} />
                </div>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </S.CartContent>
        {!hasNoItem && (
          <S.TotalPrice>
            <span>Total: </span>
            <span> {currency(price)} </span>
          </S.TotalPrice>
        )}
        {!hasNoItem && !isPaymentScreen() && (
          <Link to="/payment">
            <Button onClick={goToPayment}>Finalizar compra</Button>
          </Link>
        )}
      </S.CartList>
    </S.CartListWrapper>
  );
};

export default CartList;
