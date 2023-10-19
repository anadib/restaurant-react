import { useContext } from "react";
import useDeviceSize from "../hooks/useDeviceSize";
import AplicationContext from "../contexts/aplicationContext";
import { useLocation } from "react-router-dom";

const useChangeCart = () => {
  const isSmallDesktop = useDeviceSize();
  const { cartList, setcartList, setSellectedItem } =
    useContext(AplicationContext);
  const location = useLocation();

  function increaseQuantity(item) {
    const index = cartList.findIndex((cartItem) => cartItem.id === item.id);

    if (!isSmallDesktop || (isSmallDesktop && location.pathname === "/cart")) {
      ++cartList[index].quantity;
      setcartList([...cartList]);
      return;
    }

    ++item.quantity;
    setSellectedItem({ ...item });
  }

  function decreaseQuantity(item) {
    const index = cartList.findIndex((cartItem) => cartItem.id === item.id);

    if (!isSmallDesktop || (isSmallDesktop && location.pathname === "/cart")) {
      --cartList[index].quantity;
      setcartList([...cartList]);
      return;
    }

    --item.quantity;
    setSellectedItem({ ...item });
  }

  const addToCart = (item) => {
    const cartItem = cartList.find((cartItem) => cartItem.id === item.id);
    const index = cartList.findIndex((cartItem) => cartItem.id === item.id);

    if (!cartItem) {
      setcartList([
        ...cartList,
        {
          ...item,
          quantity: item?.quantity || 1,
          observation: item.observation || "",
        },
      ]);
      return;
    }

    if (!isSmallDesktop) {
      increaseQuantity(item);
      return;
    }

    cartList[index].quantity = cartList[index].quantity + item.quantity;
    setcartList([...cartList]);
  };

  const removeItem = (item) => {
    const index = cartList.findIndex((cartItem) => cartItem.id === item.id);

    cartList.splice(index, 1);
    setcartList([...cartList]);
  };

  const addObservation = (item, observation) => {
    const index = cartList.findIndex((cartItem) => cartItem.id === item.id);

    cartList[index].observation = observation;
    setcartList([...cartList]);
  };

  const resetCartList = () => {
    setcartList([]);
  };

  return {
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    removeItem,
    addObservation,
    resetCartList,
  };
};

export default useChangeCart;
