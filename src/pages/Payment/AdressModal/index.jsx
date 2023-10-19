import React from "react";
import { useForm } from "react-hook-form";
import Modal from "../../../components/Modal";
import { Button } from "../../../components";

import * as S from "./style";
import { cepMask, cityMask, numberMask, streetMask } from "../utils";

const AdressModal = ({ onShow, onClose, handleSaveAdress }) => {
  const {
    register,
    handleSubmit,
    clearErrors,
    setValue,
    formState: { errors },
  } = useForm({
    mode: "all",
  });

  const addAdress = (data) => {
    handleSaveAdress(data);
    onClose();
  };

  const handleCloseModal = () => {
    clearErrors();
    onClose();
  };

  return (
    <S.ModalWrapper>
      <Modal
        title={"Adicionar Endereço"}
        show={onShow}
        onClose={handleCloseModal}
      >
        <S.AdressModalContent onSubmit={handleSubmit(addAdress)}>
          <S.InputField error={!!errors.cep}>
            <label>CEP*</label>
            <input
              type="text"
              placeholder="Digite seu cep"
              {...register("cep", { required: true })}
              onChange={(e) => {
                e.currentTarget.value = cepMask(e.currentTarget.value);
                setValue("cep", e.currentTarget.value);
              }}
            />
            {!!errors.cep && <p>O cep é obrigatório</p>}
          </S.InputField>

          <S.InputField error={!!errors.city}>
            <label>Cidade*</label>
            <input
              type="text"
              placeholder="Digite sua cidade"
              {...register("city", { required: true })}
              onChange={(e) => {
                e.currentTarget.value = cityMask(e.currentTarget.value);
                setValue("city", e.currentTarget.value);
              }}
            />
            {!!errors.city && <p>A cidade é obrigatória</p>}
          </S.InputField>

          <S.InputContainer>
            <S.InputField error={!!errors.street}>
              <label>Rua*</label>
              <input
                type="text"
                placeholder="Digite sua rua"
                {...register("street", { required: true })}
                onChange={(e) => {
                  e.currentTarget.value = streetMask(e.currentTarget.value);
                  setValue("street", e.currentTarget.value);
                }}
              />
              {!!errors.street && <p>A rua é obrigatória</p>}
            </S.InputField>

            <S.InputField error={!!errors.number}>
              <label>Número*</label>
              <input
                type="text"
                placeholder="Digite o número"
                {...register("number", { required: true })}
                onChange={(e) => {
                  e.currentTarget.value = numberMask(e.currentTarget.value);
                  setValue("number", e.currentTarget.value);
                }}
              />
              {!!errors.number && <p>O número é obrigatório</p>}
            </S.InputField>
          </S.InputContainer>
          <S.ButtonContainer>
            <Button variant="outlined" onClick={handleCloseModal}>
              Cancelar
            </Button>
            <Button type="submit">Adicionar</Button>
          </S.ButtonContainer>
        </S.AdressModalContent>
      </Modal>
    </S.ModalWrapper>
  );
};

export default AdressModal;
