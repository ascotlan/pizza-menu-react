import pizzaData from "../mocks/data";
import PizzaListItem from "./PizzaListItem";
import React from "react";

function Pizza() {
  const renderedPizzas = pizzaData.map((pizza) => (
    <PizzaListItem
      key={pizza.name}
      name={pizza.name}
      ingredients={pizza.ingredients}
      price={pizza.price}
      url={pizza.photoName}
      soldOut={pizza.soldOut}
    />
  ));

  return (
    <React.Fragment>
      {pizzaData.length > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. 6 ceative dishes to choose from. All from
            our stone oven, all organic, all delicious.
          </p>
          <ul className="pizzas">{renderedPizzas}</ul>
        </>
      ) : (
        <p>We're still working on our menu. Please come back later :)</p>
      )}
    </React.Fragment>
  );
}

export default Pizza;
