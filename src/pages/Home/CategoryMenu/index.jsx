import React, { useContext, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchCategory } from "../../../store/actions/categoryAction";
import AplicationContext from "../../../contexts/aplicationContext";

import { ReactComponent as Pizza } from "../../../assets/icons/pizza.svg";
import { ReactComponent as Combo } from "../../../assets/icons/french-fries.svg";
import { ReactComponent as Deserts } from "../../../assets/icons/ice-cream.svg";
import { ReactComponent as Drinks } from "../../../assets/icons/smothie.svg";
import { ReactComponent as Burguer } from "../../../assets/icons/food.svg";

import * as S from "./style";
import { useEffect } from "react";

const CategoryMenu = () => {
  const dispatch = useDispatch();
  const [selectedCategory, setSelectedCategory] = useState("pizza");
  const { setIsLoading } = useContext(AplicationContext);

  const categoryList = [
    { label: "Pizza", Icon: Pizza, id: "pizza" },
    { label: "Bebidas", Icon: Drinks, id: "drinks" },
    { label: "Doces", Icon: Deserts, id: "deserts" },
    { label: "Combos", Icon: Combo, id: "combo" },
    { label: "Burguers", Icon: Burguer, id: "burguers" },
  ];

  useEffect(() => {
    onCategoryClick("pizza");
  }, []);

  function onCategoryClick(id) {
    setSelectedCategory(id);
    setIsLoading(true);
    setTimeout(() => {
      dispatch(fetchCategory(id)).then(setIsLoading(false));
    }, 500);
  }

  return (
    <S.CategoryMenu>
      <ul>
        {categoryList.map(({ label, Icon, id }) => (
          <li
            key={id}
            onClick={() => onCategoryClick(id)}
            className={selectedCategory === id ? "active" : ""}
          >
            <Icon />
            <p>{label}</p>
          </li>
        ))}
      </ul>
    </S.CategoryMenu>
  );
};

export default CategoryMenu;
