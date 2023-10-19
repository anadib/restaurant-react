import React from "react";

import * as S from "./style.js";

const Button = ({ children, ...props }) => {
  return <S.Button {...props}>{children}</S.Button>;
};

Button.defaultProps = {
  variant: "contained",
};

export default Button;
