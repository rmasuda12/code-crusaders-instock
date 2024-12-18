import React from "react";
import "./WarehouseItems.scss";

const WarehouseItems = ({ warehouse, onItemClick }) => {
  return (
    <div className="warehouse-item" onClick={() => onItemClick(warehouse.id)}>
      <div className="warehouse-item__details">
        <h3 className="warehouse-item__name">{warehouse.name}</h3>
        <p className="warehouse-item__address">{warehouse.address}</p>
        <p className="warehouse-item__contact">Contact: {warehouse.contact}</p>
      </div>
      <div className="warehouse-item__arrow">→</div>
    </div>
  );
};

export default WarehouseItems;
