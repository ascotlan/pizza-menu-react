import pizzaData from "../mocks/data";
import PizzaListItem from "./PizzaListItem";

function Pizza() {
  const renderedPizzas = pizzaData.map((pizza) => (
    <PizzaListItem
      key={pizza.name}
      name={pizza.name}
      ingredients={pizza.ingredients}
      price={pizza.price}
      url={pizza.photoName}
      availability={pizza.soldOut}
    />
  ));

  return <ul className="pizzas">{renderedPizzas}</ul>;
}

export default Pizza;
