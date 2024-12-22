import WarehouseEditForm from "../../components/WarehouseEditForm/WarehouseEditForm";
import "../WarehouseEdit/WarehouseEdit.scss";
import backarrow from "../../assets/icons/arrow_back-24px.svg";
import { useState } from "react";
import { NavLink } from "react-router-dom";

function WarehouseEdit() {
  return (
    <div className="wh-edit__container">
      <section className="wh-edit__card">
        <NavLink to="/warehouses" className="wh-edit__header-link">
          <h1 className="wh-edit__header-text"> Edit Warehouse</h1>
          <img src={backarrow} alt="back arrow" className="wh-edit__icon" />
        </NavLink>

        <WarehouseEditForm />
      </section>
    </div>
  );
}
export default WarehouseEdit;
