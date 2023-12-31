function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  const time = new Date().toLocaleTimeString();

  return (
    <footer className="footer">
      <div className="order">
        {isOpen ? (
          <p>
            <span>{time}</span> - We are currently open!
          </p>
        ) : (
          <p>
            <span>{time}</span> - Sorry we're closed
          </p>
        )}
        {isOpen && <button className="btn">Order</button>}
      </div>
    </footer>
  );
}

export default Footer;
