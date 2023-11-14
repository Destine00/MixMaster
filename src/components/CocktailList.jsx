import React from "react";
import Wrapper from "../assets/wrappers/CocktailList";
import CockTailCard from "./CockTailCard";

const CocktailList = ({ drinks }) => {
  if (drinks < 1) {
    return <h4 style={{ textAlign: "center" }}>No drinks available</h4>;
  }

  const newDrinks = drinks.map((item) => {
    const { idDrink, strAlcoholic, strDrinkThumb, strGlass, strDrink } = item;
    return {
      id: idDrink,
      name: strDrink,
      info: strAlcoholic,
      glass: strGlass,
      image: strDrinkThumb,
    };
  });
  return (
    <Wrapper>
      {newDrinks.map((drink) => {
        return <CockTailCard key={drink.id} {...drink} />;
      })}
    </Wrapper>
  );
};

export default CocktailList;
