import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./index.css";

const ThumbnailItem = (props) => {
  const renderThumbnails = () => {
    if (glassesList.length > 4) {
      const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };
      return (
        <Slider className="slider" {...settings}>
          {glassesList.map((each) => (
            <div
              className="thumbnail-container"
              onClick={() => updateThumbnail(each.id)}
            >
              <img
                src={each.imageUrl}
                alt="glasses"
                className="thumbnail-image"
              />
            </div>
          ))}
        </Slider>
      );
    }
    return (
      <div className="thumbnail-item-container">
        {glassesList.map((each) => (
          <div
            className="thumbnail-container"
            onClick={() => updateThumbnail(each.id)}
          >
            <img
              src={each.imageUrl}
              alt="glasses"
              className="thumbnail-image"
            />
          </div>
        ))}
      </div>
    );
  };

  const { glassesList, updateThumbnail } = props;
  return <div className="thumbnails">{renderThumbnails()}</div>;
};

export default ThumbnailItem;
