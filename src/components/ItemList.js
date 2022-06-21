import React from "react";
import Items from "./Items";

const ItemList = ({ items }) => {
  return (
    
      <div className="items">
        {items.map((item) => (
          <Items key={item.id} item={item} />
        ))}
      </div>
    
  );
};

export default ItemList;