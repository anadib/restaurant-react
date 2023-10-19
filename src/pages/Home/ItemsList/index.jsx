import React, { useContext } from "react";
import { useSelector } from "react-redux";
import AplicationContext from "../../../contexts/aplicationContext";
import { Loader } from "../../../components";
import Item from "./Item";

import * as S from "./style";

const ItemsList = () => {
  let storyCategory = useSelector((store) => store.category);
  const { isLoading } = useContext(AplicationContext);

  return (
    <>
      <S.ItemsList>
        {storyCategory.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </S.ItemsList>

      <Loader active={isLoading} />
    </>
  );
};

export default ItemsList;
