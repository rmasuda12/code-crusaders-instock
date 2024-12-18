//mainpage where we are integrating WarehouseList component
//JiraTicket O24CC-9

import React from "react";
import { useNavigate } from "react-router-dom";
import WarehouseItem from "../../components/WarehouseItem/WarehouseItem";
import SortIcon from "../../assets/icons/sort-24px.svg";
import SearchBar from "../../components/SearchBar/SerachBar";
import "./Warehouse.scss";

export default function () {
  const navigate = useNavigate();

  const handleAdd = (e) => {
    navigate(`/warehouse/add`);
  };

  return (
    <div className="warehouses-container">
      <div className="warehouses">
        <div className="warehouse-header">
          <h1 className="warehouse-header__title">Warehouses</h1>
          <div className="header-interactive">
            <SearchBar
              classname="header-interactive__search"
              placeholder="Search..."
            />

            <Button
              classname="header-interactive__add"
              buttonText="+ Add New Warehouse"
              link={handleAdd}
            />
          </div>
        </div>

        <div className="warehouse-list">
          <span className="item-container">
            <p>INVENTORY ITEM</p>
            <img
              className="item-container__icon"
              src={HeaderChevron}
              alt="sort icon"
            />
          </span>
          <span className="item-container">
            <p>ADDRESS</p>
            <img
              className="item-container__icon"
              src={HeaderChevron}
              alt="sort icon"
            />
          </span>
          <span className="item-container">
            <p>CONTACT NAME</p>
            <img
              className="item-container__icon"
              src={HeaderChevron}
              alt="sort icon"
            />
          </span>
          <span className="item-container item-container-contact">
            <p className="item-container__contact">CONTACT INFORMATION</p>
            <img
              className="item-container__icon"
              src={HeaderChevron}
              alt="sort icon"
            />
          </span>
          <span className="item-container-actions">
            <p className="warehouse-list__last">ACTIONS</p>
          </span>
        </div>
        <WareHouseItem />
      </div>
    </div>
  );
}
