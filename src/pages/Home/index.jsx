import React from "react";
import { Link } from "react-router-dom";
import { useDeviceSize } from "../../hooks";
import CategoryMenu from "./CategoryMenu";
import ItemsList from "./ItemsList";
import Cart from "../Cart";
import { ReactComponent as CartIcon } from "../../assets/icons/cart.svg";

import * as S from "./style";

const Home = () => {
  const isSmallDesktop = useDeviceSize();

  return (
    <S.Home>
      {isSmallDesktop && (
        <S.LinkContainer>
          <Link to="/cart">
            <CartIcon />
          </Link>
        </S.LinkContainer>
      )}
      <CategoryMenu />
      <ItemsList />
      {!isSmallDesktop && <Cart />}
    </S.Home>
  );
};

export default Home;
