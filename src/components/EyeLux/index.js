import Header from "../Header";
import ShopCard from "../ShopCard";
import Glasses from "../Glasses";

import "./index.css";

const hiltonGlasses = [
  {
    id: 0,
    imageUrl:
      "https://eyelux-project.web.app/static/media/Hilton-14.0412097376241a83bd6e.jpg",
  },
  {
    id: 1,
    imageUrl:
      "https://eyelux-project.web.app/static/media/Hilton-3.f93058d51a998899249a.jpg",
  },
  {
    id: 2,
    imageUrl:
      "https://eyelux-project.web.app/static/media/Hilton-4.9a2b4279c69036a98369.jpg",
  },
  {
    id: 3,
    imageUrl:
      "https://eyelux-project.web.app/static/media/Hilton-6.331fa57e71abb108c34a.jpg",
  },
  {
    id: 4,
    imageUrl:
      "https://eyelux-project.web.app/static/media/Hilton-14.0412097376241a83bd6e.jpg",
  },
  {
    id: 5,
    imageUrl:
      "https://eyelux-project.web.app/static/media/Hilton-8.07c3633573563eec8c47.jpg",
  },
];

const formByGlasses = [
  {
    id: 0,
    imageUrl:
      "https://eyelux-project.web.app/static/media/Formby%20-21.1ff3237329ed44c8d295.jpg",
  },
  {
    id: 1,
    imageUrl:
      "https://eyelux-project.web.app/static/media/Formby%20-3.881266ce2dbdb281518b.jpg",
  },
  {
    id: 2,
    imageUrl:
      "https://eyelux-project.web.app/static/media/Formby%20-18.0f5f41c44a31d55324b6.jpg",
  },
  {
    id: 3,
    imageUrl:
      "https://eyelux-project.web.app/static/media/Formby%20-2.1a9194b4691a9d533f87.jpg",
  },
];

const nelsonGlasses = [
  {
    id: 0,
    imageUrl:
      "https://eyelux-project.web.app/static/media/Nelson-18.df92605c13317e7e5c65.jpg",
  },
  {
    id: 1,
    imageUrl:
      "https://eyelux-project.web.app/static/media/Nelson-4.f0705936bc38f44cc82d.jpg",
  },
  {
    id: 2,
    imageUrl:
      "https://eyelux-project.web.app/static/media/Eyelux%20Frames-84.53ece6e1097ade1e6ded.jpg",
  },
  {
    id: 3,
    imageUrl:
      "https://eyelux-project.web.app/static/media/Formby%20-18.0f5f41c44a31d55324b6.jpg",
  },
];

const EyeLux = () => (
  <div className="body">
    <Header />
    <ShopCard />
    <div className="glasses">
      <Glasses glasses={hiltonGlasses} title="Hilton" />
      <Glasses glasses={formByGlasses} title="Formby" />
      <Glasses glasses={nelsonGlasses} title="Nelson" />
    </div>
  </div>
);

export default EyeLux;
