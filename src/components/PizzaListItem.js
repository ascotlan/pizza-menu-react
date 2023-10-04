function PizzaListItem({ name, ingredients, price, url, availablility }) {
  return (
    <li className="pizza">
      <img src={url} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span>{price}</span>
      </div>
    </li>
  );
}

export default PizzaListItem;
