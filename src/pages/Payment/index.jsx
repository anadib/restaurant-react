import React from "react";
import { Link } from "react-router-dom";
import { useDeviceSize } from "../../hooks";
import OrderForm from "./OrderForm";
import Cart from "../Cart";
import { ReactComponent as Arrow } from "../../assets/icons/arrow.svg";

import * as S from "./style";

const Payment = () => {
  const isSmallDesktop = useDeviceSize();

  return (
    <S.PaymentWrapper>
      <S.Payment>
        <S.LinkContainer>
          <Link to="/">
            <Arrow />
            Voltar
          </Link>
        </S.LinkContainer>
        <OrderForm />
      </S.Payment>
      {!isSmallDesktop && <Cart />}
    </S.PaymentWrapper>
  );
};

export default Payment;
