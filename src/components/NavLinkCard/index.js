import "./index.css";

const NavLinkCard = (props) => {
  const { cardDetails } = props;
  const { linkId, imageUrl, displayText } = cardDetails;
  if (linkId === "HOME-TRYON") {
    return (
      <div className="try-card-container">
        <img
          src="https://res.cloudinary.com/dlpgowt5s/image/upload/v1671782298/Specs-cuate_qqmylp.png"
          alt="try at home"
          className="nav-link-image-home"
        />
        <div className="try-home-text">
          <h1 className="try-heading">
            Try 4 Frames without leaving your Home. (it’s free)
          </h1>
          <div className="try-buttons-container">
            <button className="try-button">Shop Men</button>
            <button className="try-button">Shop Women</button>
          </div>
        </div>

        <img
          src="https://res.cloudinary.com/dlpgowt5s/image/upload/v1671781891/Specs-amico_ulna6o.png"
          alt="nav link home"
          className="nav-link-image-home"
        />
      </div>
    );
  }
  return (
    <div className="card-container">
      <img src={imageUrl} alt="nav link" className="nav-link-image" />
      <div className="buy-card">
        <h1 className="mens-glasses">{displayText}</h1>
        <button className="buy-now-button" type="button">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default NavLinkCard;
