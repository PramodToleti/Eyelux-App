import { Component } from "react";

import ThumbnailItem from "../ThumbnailItem";

import "./index.css";

class Glasses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeImage: this.props.glasses[0].imageUrl,
      glassesList: this.props.glasses,
      title: this.props.title,
    };
  }

  updateThumbnail = (id) => {
    const { glassesList } = this.state;
    this.setState({
      activeImage: glassesList[id].imageUrl,
    });
  };

  render() {
    const { activeImage, glassesList, title } = this.state;
    return (
      <div className="glass-item-container">
        <img src={activeImage} alt="glasses" className="glass-image" />
        <h1 className="title-heading">{title}</h1>
        <p className="no-of-colors">{glassesList.length} Colors</p>
        <ThumbnailItem
          glassesList={glassesList}
          updateThumbnail={this.updateThumbnail}
        />
      </div>
    );
  }
}

export default Glasses;
