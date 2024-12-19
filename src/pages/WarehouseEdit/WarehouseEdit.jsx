import "../WarehouseEdit/WarehouseEdit.scss";
import backarrow from "../../assets/icons/arrow_back-24px.svg";

function WarehouseEdit() {
  return (
    <div className="wh-edit__container">
      <section className="wh-edit__card">
        <div className="wh-edit__header">
          {/* <NavLink to="" className="warehouse-edit__header-link"> */}
          <h1 className="wh-edit__header-text"> Edit Warehouse</h1>
          <img src={backarrow} alt="back arrow" className="wh-edit__icon" />
          {/* </NavLink> */}
        </div>
        <div className="wh-edit__details">
          <form action="" className="wh-edit__form">
            <h2 className="wh-edit__details-header">Warehouse Details</h2>
            <article className="wh-edit__form-container">
              <label className="wh-edit__form-label">
                <h3>Warehouse Name</h3>
              </label>
              <input
                type="text"
                name="warehousename"
                className="wh-edit__formfield"
              />
              <label className="wh-edit__form-label">
                <h3>Street Address</h3>
              </label>
              <input
                type="text"
                name="warehouseaddress"
                className="wh-edit__formfield"
              />
              <label className="wh-edit__form-label">
                <h3>City</h3>
              </label>
              <input
                type="text"
                name="warehousecity"
                className="wh-edit__formfield"
              />
              <label className="wh-edit__form-label">
                <h3>Country</h3>
              </label>
              <input
                type="text"
                name="warehousecountry"
                className="wh-edit__formfield"
              />
            </article>
          </form>
          <form action="" className="wh-edit__form">
            <h2 className="wh-edit__details-header">Contact Details</h2>
            <article className="wh-edit__form-container">
              <label className="wh-edit__form-label">
                <h3>Contact Name</h3>
              </label>
              <input
                type="text"
                name="contactname"
                className="wh-edit__formfield"
              />
              <label className="wh-edit__form-label">
                <h3>Position</h3>
              </label>
              <input
                type="text"
                name="position"
                className="wh-edit__formfield"
              />
              <label className="wh-edit__form-label">
                <h3>Phone Number</h3>
              </label>
              <input
                type="text"
                name="phonenumber"
                className="wh-edit__formfield"
              />
              <label className="wh-edit__form-label">
                <h3>Email</h3>
              </label>
              <input type="text" name="email" className="wh-edit__formfield" />
            </article>
          </form>
        </div>
        <section className="wh-edit__cta">
          <button className="wh-edit__button-reset" type="reset">
            <h3 className="wh-edit__cancel-text">Cancel</h3>
          </button>
          <button className="wh-edit__button-save" type="submit">
            <h3 className="wh-edit__save-text">Save</h3>
          </button>
        </section>
      </section>
    </div>
  );
}
export default WarehouseEdit;
