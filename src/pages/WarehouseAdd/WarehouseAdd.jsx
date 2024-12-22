import WarehouseAddForm from "../../components/WarehouseAddForm/WarehouseAddForm";
import "../WarehouseAdd/WarehouseAdd.scss";
import backarrow from "../../assets/icons/arrow_back-24px.svg";
import { NavLink } from "react-router-dom";

function WarehouseAdd() {
  return (
    <div className="wh-edit__container">
      <section className="wh-edit__card">
        <NavLink to="/warehouses" className="wh-edit__header-link">
          <h1 className="wh-edit__header-text"> Add New Warehouse</h1>
          <img src={backarrow} alt="back arrow" className="wh-edit__icon" />
        </NavLink>

        <WarehouseAddForm />
      </section>
    </div>
  );
}
export default WarehouseAdd;
