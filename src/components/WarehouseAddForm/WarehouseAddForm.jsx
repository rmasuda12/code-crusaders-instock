import "./WarehouseAddForm.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

function WarehouseAddForm() {
  const params = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    warehouseName: "",
    streetAddress: "",
    city: "",
    country: "",
    contactName: "",
    position: "",
    phoneNumber: "",
    email: "",
  });
  const [warehouseData, setWarehouseData] = useState(formData);

  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData((prevData) => {
      const updatedData = { ...prevData };
      updatedData[name] = value;
      return updatedData;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("submit");
  };
  const handleCancelClick = (e) => {
    e.preventDefault();
    navigate("/warehouse");
  };

  return (
    <>
      <div className="wh-edit">
        <form className="wh-edit__form" onSubmit={handleSubmit}>
          <div className="wh-edit__form-container">
            <h2 className="wh-edit__details-header">Warehouse Details</h2>
            <label className="wh-edit__form-label">
              <h3>Warehouse Name</h3>
            </label>
            <input
              type="text"
              name="warehouseName"
              onChange={handleInputChange}
              value={formData.warehouseName}
              placeholder={warehouseData.warehouse_name}
              className="wh-edit__formfield"
            />
            <label className="wh-edit__form-label">
              <h3>Street Address</h3>
            </label>
            <input
              type="text"
              name="streetAddress"
              onChange={handleInputChange}
              value={formData.streetAddress}
              placeholder={warehouseData.address}
              className="wh-edit__formfield"
            />
            <label className="wh-edit__form-label">
              <h3>City</h3>
            </label>
            <input
              type="text"
              name="city"
              onChange={handleInputChange}
              value={formData.city}
              placeholder={warehouseData.city}
              className="wh-edit__formfield"
            />
            <label className="wh-edit__form-label">
              <h3>Country</h3>
            </label>
            <input
              type="text"
              name="country"
              onChange={handleInputChange}
              value={formData.country}
              placeholder={warehouseData.country}
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
              name="contactName"
              onChange={handleInputChange}
              value={formData.contactName}
              placeholder={warehouseData.contact_name}
              className="wh-edit__formfield"
            />
            <label className="wh-edit__form-label">
              <h3>Position</h3>
            </label>
            <input
              type="text"
              name="position"
              onChange={handleInputChange}
              value={formData.position}
              placeholder={warehouseData.contact_position}
              className="wh-edit__formfield"
            />
            <label className="wh-edit__form-label">
              <h3>Phone Number</h3>
            </label>
            <input
              type="text"
              name="phoneNumber"
              onChange={handleInputChange}
              value={formData.phoneNumber}
              placeholder={warehouseData.contact_phone}
              className="wh-edit__formfield"
            />
            <label className="wh-edit__form-label">
              <h3>Email</h3>
            </label>
            <input
              type="text"
              name="email"
              onChange={handleInputChange}
              value={formData.email}
              placeholder={warehouseData.contact_email}
              className="wh-edit__formfield"
            />
          </div>

          <section className="wh-edit__cta">
            <button
              className="wh-edit__button-reset"
              type="reset"
              onClick={handleCancelClick}
            >
              <h3 className="wh-edit__cancel-text">Cancel</h3>
            </button>
            <button className="wh-edit__button-save" type="submit">
              <h3 className="wh-edit__button-text">Save</h3>
            </button>
          </section>
        </form>
      </div>
    </>
  );
}

export default WarehouseAddForm;
