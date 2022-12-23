import { Component } from "react";

import "./index.css";

const activeCardId = ["FRAMES", "GLASSES"];

class ShopCard extends Component {
  state = { activeCard: activeCardId[1] };

  onFrameClick = () => {
    this.setState({
      activeCard: activeCardId[0],
    });
  };

  onGlassesClick = () => {
    this.setState({
      activeCard: activeCardId[1],
    });
  };

  renderFrames = () => {
    const { activeCard } = this.state;
    const isActive = activeCard === "FRAMES";
    const activeStyles = isActive ? "active-card" : "";
    return (
      <div className="shop-card-body">
        {isActive ? (
          <div className={`try-frames-container  ${activeStyles}`}>
            <h1 className="try-frames-heading">
              Try 4 frames at home for free
            </h1>
            <p className="try-frames-text">
              Pick 4 frames of your choice to try out for 5 days. it’s simple &
              we offer free shipment and returns.
            </p>
            <div className="shop-buttons-container">
              <button className="shop-button" type="button">
                Shop Men
              </button>
              <button className="shop-button" type="button">
                Shop Women
              </button>
            </div>
          </div>
        ) : null}
        <img
          src="https://res.cloudinary.com/dlpgowt5s/image/upload/v1671764589/casual-life-3d-girl-with-boxes-1_h5lfir.png"
          alt="frames"
          className="try-frames-image"
        />
      </div>
    );
  };

  renderGlasses = () => {
    const { activeCard } = this.state;
    const isActive = activeCard === "GLASSES";
    const activeStyles = isActive ? "active-card" : "";
    return (
      <div className="shop-card-body">
        {isActive ? (
          <div className={`buy-glasses-container ${activeStyles}`}>
            <h1 className="buy-glasses-heading">
              Glasses From <span className="money">$99</span> Including
              prescription lenses, coatings and thin lenses
            </h1>
            <div className="shop-buttons-container">
              <button className="shop-button" type="button">
                Shop Men
              </button>
              <button className="shop-button" type="button">
                Shop Women
              </button>
            </div>
          </div>
        ) : null}
        <img
          src="https://res.cloudinary.com/dlpgowt5s/image/upload/v1671765701/casual-life-3d-boy-in-sunglasses-sitting-with-arm-on-knee-and-holding-skateboard_qatnk8.png"
          alt="glasses"
          className="shop-glasses-image"
        />
      </div>
    );
  };

  render() {
    const { activeCard } = this.state;
    const expandFrames =
      activeCard === "FRAMES" ? "expand-frames" : "shrink-frames";
    const expandGlasses =
      activeCard === "GLASSES" ? "expand-glasses" : "shrink-glasses";
    return (
      <div className="shop-container">
        <div
          className={`frame-container ${expandFrames}`}
          onClick={this.onFrameClick}
        >
          {this.renderFrames()}
        </div>
        <div
          className={`glasses-container ${expandGlasses}`}
          onClick={this.onGlassesClick}
        >
          {this.renderGlasses()}
        </div>
      </div>
    );
  }
}

export default ShopCard;
