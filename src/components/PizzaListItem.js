function PizzaListItem({ name, ingredients, price, url, soldOut }) {
  return (
    <li className={`pizza ${soldOut ? "sold-out" : ""}`}>
      <img src={url} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span>{!soldOut ? price : "Sold Out"}</span>
      </div>
    </li>
  );
}

export default PizzaListItem;
