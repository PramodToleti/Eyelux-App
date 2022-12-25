import "./index.css";

const AboutProduct = () => (
  <>
    <div className="about-body">
      <div className="about-container-1">
        <img
          src="https://res.cloudinary.com/dlpgowt5s/image/upload/v1671893166/3d_in2dgw.png"
          className="about-image-1"
          alt="about"
        />
        <div className="about-text-1">
          <h1 className="about-text-heading-1">Direct To You</h1>
          <h1 className="about-text-color-1">
            No middleman or markups prescription glasses from £100
          </h1>
          <button className="shop-now-button-1 about-shop-button">
            Shop Now
          </button>
        </div>
      </div>
      <div className="about-container-2">
        <div className="about-text-2">
          <h1 className="about-text-heading-2">Finest Material</h1>
          <h1 className="about-text-color-2">
            We source the finest material to produce our frames.
          </h1>
          <button className="shop-now-button-2 about-shop-button">
            Shop Now
          </button>
        </div>
        <img
          src="https://res.cloudinary.com/dlpgowt5s/image/upload/v1671897432/3d-2_shymxk.png"
          className="about-image-2"
          alt="about"
        />
      </div>
    </div>
  </>
);

export default AboutProduct;
