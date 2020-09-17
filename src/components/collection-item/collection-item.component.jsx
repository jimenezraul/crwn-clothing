import React from "react";

import CustomButton from "../custom-button/cutom-button.component";

import "./collection-item.styles.scss";
import { scryRenderedDOMComponentsWithClass } from "react-dom/test-utils";

const CollectionItem = ({ id, name, price, imageUrl }) => (
  <div className="collection-item">
    <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
    <div className="collection-footer">
      <span className="name">{name}</span>
      <span className="price">{price}</span>
    </div>
    <CustomButton inverted>ADD TO CART</CustomButton>
  </div>
);

export default CollectionItem;
