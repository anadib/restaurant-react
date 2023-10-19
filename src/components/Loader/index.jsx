import React from "react";
import * as S from "./style";

const Loader = ({ active }) => {
  if (!active) return null;

  return (
    <>
      <S.LoaderContainer />
      <S.Blur>
        <S.Loader />
      </S.Blur>
    </>
  );
};

export default Loader;
