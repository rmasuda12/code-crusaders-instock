import "./WarehouseEditForm.scss";
import { useState } from "react";

function WarehouseEditForm() {
  const [warehouseName, setWarehouseName] = useState(" ");
  const [streetAddress, setStreetAddress] = useState(" ");
  const [city, setCity] = useState(" ");
  const [country, setCountry] = useState(" ");
  const [contactName, setContactName] = useState(" ");
  const [position, setPosition] = useState(" ");
  const [phoneNumber, setPhoneNumber] = useState(" ");
  const [email, setEmail] = useState(" ");

  const cancel = (e) => {
    e.preventDefault();
    console.log("dont submit!");
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("test");
  // };

  const handleChangeWarehouseName = (event) => {
    setWarehouseName(event.target.value);
  };

  return (
    <>
      <form className="wh-edit__form">
        <div className="wh-edit__form-container">
          <h2 className="wh-edit__details-header">Warehouse Details</h2>
          <label className="wh-edit__form-label">
            <h3>Warehouse Name</h3>
          </label>
          <input
            type="text"
            name="warehousename"
            onChange={handleChangeWarehouseName}
            value={warehouseName}
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
        </div>
        <div className="wh-edit__form-container">
          <h2 className="wh-edit__details-header">Contact Details</h2>
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
          <input type="text" name="position" className="wh-edit__formfield" />
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
        </div>
      </form>

      <section className="wh-edit__cta">
        <button className="wh-edit__button-reset" type="reset" onClick={cancel}>
          <h3 className="wh-edit__cancel-text">Cancel</h3>
        </button>
        <button className="wh-edit__button-save" type="submit">
          <h3 className="wh-edit__button-text">Save</h3>
        </button>
      </section>
    </>
  );
}

export default WarehouseEditForm;
