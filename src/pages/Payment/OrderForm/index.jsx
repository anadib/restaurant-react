import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import AplicationContext from "../../../contexts/aplicationContext";
import { useChangeCart } from "../../../hooks";
import { cellphoneMask, nameMask } from "../utils";

import Button from "../../../components/Button";
import AdressModal from "../AdressModal";
import InvalidAdressModal from "../InvalidAdressModal";
import EmptyCartModal from "../EmptyCartModal";

import * as S from "./style";

const OrderForm = () => {
  const navigate = useNavigate();
  const { cartList } = useContext(AplicationContext);
  const { resetCartList } = useChangeCart();

  const [showAdressModal, setShowAdressModal] = useState(false);
  const [showInvalidAdressModal, setShowInvalidAdressModal] = useState(false);
  const [showEmptyCartModal, setShowEmptyCartModal] = useState(false);
  const [adressInfo, setAdressInfo] = useState("");

  useEffect(() => {
    if (!cartList.length) {
      setShowEmptyCartModal(true);
    }
  }, [cartList]);

  const orderItems = () => {
    if (watch("deliveryType") === "delivery" && !adressInfo) {
      setShowInvalidAdressModal(true);
      return;
    }

    const phone = "5511999999999";
    let adress = "";

    if (adressInfo) {
      adress = `Endereço: ${adressInfo.street} , ${adressInfo.number} - ${adressInfo.city} - ${adressInfo.cep}`;
    } else {
      adress = "Endereço: Retirar na loja";
    }

    let text = `*Restaurante Dib*
      Cliente: ${getValues("name")}
      Contato: ${getValues("cellphone")}
      ${adress}
      Pedido: ${cartList.map((item) => {
        return `
          ${item.quantity}x ${item.name} - ${item.observation || ""}`;
      })}`;

    text = window.encodeURIComponent(text);
    window.open(`https://api.whatsapp.com/send?phone=${phone}&text=${text}`);

    resetCartList();
    navigate("/");
  };

  const handleSaveAdress = (data) => {
    setAdressInfo(data);
  };

  const onShowAdressModal = () => {
    setShowAdressModal(true);
  };

  const hideAdressModal = () => {
    setShowAdressModal(false);
  };

  const hideInvalidAdressModal = () => {
    setShowInvalidAdressModal(false);
  };

  const hideEmptyCartModal = () => {
    setShowEmptyCartModal(false);
    navigate("/");
  };

  const {
    register,
    handleSubmit,
    watch,
    getValues,
    formState: { errors },
  } = useForm({
    mode: "all",
    defaultValues: {
      deliveryType: "store",
      paymentType: "creditCard",
    },
  });

  return (
    <S.OrderForm>
      <form onSubmit={handleSubmit(orderItems)}>
        <S.UserData>
          <S.SectionTitle>Seus dados</S.SectionTitle>
          <S.InputField error={!!errors.name}>
            <label>Nome*</label>
            <input
              type="text"
              placeholder="Digite seu nome"
              {...register("name", { required: true })}
              onChange={(e) => {
                e.currentTarget.value = nameMask(e.currentTarget.value);
              }}
            />
            {!!errors.name && <p>O nome é obrigatório</p>}
          </S.InputField>
          <S.InputField error={!!errors.cellphone}>
            <label>Celular*</label>
            <input
              type="text"
              placeholder="Digite seu celular"
              {...register("cellphone", { required: true })}
              onChange={(e) => {
                e.currentTarget.value = cellphoneMask(e.currentTarget.value);
              }}
            />
            {!!errors.cellphone && <p>O celular é obrigatório</p>}
          </S.InputField>
        </S.UserData>

        <S.Adress>
          <S.SectionTitle>Endereço</S.SectionTitle>
          <S.RadioContainer>
            <div>
              <input
                type="radio"
                id="store"
                value="store"
                {...register("deliveryType")}
              />
              <label htmlFor="store">Retirar na loja</label>
            </div>
            <div>
              <input
                type="radio"
                id="delivery"
                value="delivery"
                {...register("deliveryType")}
              />
              <label htmlFor="delivery">Delivery</label>
            </div>
          </S.RadioContainer>
          {watch("deliveryType") === "delivery" && adressInfo && (
            <S.AdressCard>
              <p>
                {adressInfo.street}, {adressInfo.number}
              </p>
              <p>
                {adressInfo.city} - {adressInfo.cep}
              </p>
            </S.AdressCard>
          )}
          {watch("deliveryType") === "delivery" && (
            <Button variant="link" type="button" onClick={onShowAdressModal}>
              {adressInfo ? "Editar endereço" : "Adiconar endereço"}
            </Button>
          )}
        </S.Adress>

        <S.Payment>
          <S.SectionTitle>Pagamento</S.SectionTitle>
          <p>Método de pagamento</p>
          <S.RadioContainer>
            <div>
              <input
                type="radio"
                id="creditCard"
                value="creditCard"
                {...register("paymentType")}
              />
              <label htmlFor="creditCard">Cartão</label>
            </div>
            <div>
              <input
                type="radio"
                id="cash"
                value="cash"
                {...register("paymentType")}
              />
              <label htmlFor="cash">Dinheiro</label>
            </div>
          </S.RadioContainer>
        </S.Payment>
        <S.ButtonWrapper>
          <Button type="submit">Concluir pedido</Button>
        </S.ButtonWrapper>
      </form>

      <AdressModal
        onShow={showAdressModal}
        onClose={hideAdressModal}
        handleSaveAdress={(data) => handleSaveAdress(data)}
      />
      <InvalidAdressModal
        onShow={showInvalidAdressModal}
        onClose={hideInvalidAdressModal}
      />
      <EmptyCartModal
        onShow={showEmptyCartModal}
        onClose={hideEmptyCartModal}
      />
    </S.OrderForm>
  );
};

export default OrderForm;
