import { useLoaderData, Link, Navigate } from "react-router-dom";
import axios from "axios";
import Wrapper from "../assets/wrappers/CocktailPage";
import { toast } from "react-toastify";
import { useQuery } from "@tanstack/react-query";

const singleCocktailUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const searchDrinkQuery = (id) => {
  return {
    queryKey: ["cocktail", id],
    queryFn: async () => {
      const { data } = await axios(`${singleCocktailUrl}${id}`);
      // console.log(data.drinks[0].idDrink);
      return data;
    },
  };
};

export const loader =
  (queryClient) =>
  async ({ params }) => {
    const { id } = params;
    await queryClient.ensureQueryData(searchDrinkQuery(id));
    return { id };
  };

const CockTail = () => {
  const { id } = useLoaderData();
  const { data } = useQuery(searchDrinkQuery(id));

  if (!data) return <Navigate to="/" />;

  const singleDrink = data.drinks[0];
  const {
    idDrink: drinkId,
    strDrink: name,
    strAlcoholic: info,
    strGlass: glass,
    strDrinkThumb: image,
    strInstructions: instructions,
    strCategory: category,
  } = singleDrink;

  const drinksIngredients = Object.keys(singleDrink)
    .filter((ingredient) => {
      return (
        ingredient.startsWith("strIngredient") &&
        singleDrink[ingredient] !== null
      );
    })
    .map((item) => {
      return singleDrink[item];
    });

  // toast.success()
  // console.log(drinksIngredients);

  return (
    <Wrapper>
      <header>
        <h3>{name}</h3>
      </header>
      <div className="drink">
        <img src={image} alt={name} className="img" />
        <div className="drink-info">
          <p>
            <span className="drink-data">name:</span>
            {name}
          </p>
          <p>
            <span className="drink-data">category:</span>
            {category}
          </p>
          <p>
            <span className="drink-data">info:</span>
            {info}
          </p>
          <p>
            <span className="drink-data">glass:</span>
            {glass}
          </p>
          <p>
            <span className="drink-data">ingredients:</span>
            {drinksIngredients.map((item, index) => {
              return (
                <span className="ing" key={item}>
                  {item}
                  {index < drinksIngredients.length - 1 ? "," : ""}
                </span>
              );
            })}
          </p>
          <p>
            <span className="drink-data">instructions:</span>
            {instructions}
          </p>
        </div>
      </div>

      <Link to="/" className="btn">
        back to home
      </Link>
    </Wrapper>
  );
};

export default CockTail;
