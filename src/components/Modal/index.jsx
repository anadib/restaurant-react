import React from "react";
import { Button } from "..";

import { X } from "feather-icons-react";

import * as S from "./style";

const Modal = ({ title, children, show, onClose }) => {
  return (
    <>
      {show && (
        <S.ModalBackground>
          <S.Modal>
            <S.ButtonWrapper>
              <Button variant="link" onClick={onClose}>
                <X />
              </Button>
            </S.ButtonWrapper>
            {title && <h2>{title}</h2>}
            <div>{children}</div>
          </S.Modal>
        </S.ModalBackground>
      )}
    </>
  );
};

export default Modal;
