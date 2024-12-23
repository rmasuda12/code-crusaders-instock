import "./WarehouseAddForm.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

function WarehouseAddForm() {
  const params = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    warehouse_name: "",
    address: "",
    city: "",
    country: "",
    contact_name: "",
    contact_position: "",
    contact_phone: "",
    contact_email: "",
  });

  const options = ["one", "two", "three"];

  const handleChangeForm = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    function validateForm(formData) {
      let isFormValid = true;

      for (let key in formData) {
        const fieldValue = formData[key];
        if (fieldValue === "") {
          isFormValid = false;
          break;
        }
      }

      if (!isFormValid) {
        alert("Please do not leave any fields empty");
      }
      return isFormValid;
    }
    const isFormValid = validateForm(formData);
    if (!isFormValid) {
      return;
    }

    // const { updated_at, created_at, ...dataToSend } = formData; change date format being submitted

    try {
      const response = await axios.post(
        `http://localhost:8080/warehouses`,
        formData
      );
      console.log("Warehouse updated successfully:", response);
    } catch (error) {
      console.log(error);
      alert("Error updating Warehouse");
    }
    navigate("/warehouses");
  };

  const handleCancelClick = (e) => {
    e.preventDefault();
    navigate("/warehouses");
  };

  return (
    <>
      <div className="wh-new">
        <form className="wh-new__form" onSubmit={handleSubmit}>
          <div className="test">
            <div className="wh-new__form-container">
              <h2 className="wh-new__details-header">Warehouse Details</h2>
              <label className="wh-new__form-label">
                <h3>Warehouse Name</h3>
              </label>
              <input
                type="text"
                name="warehouse_name"
                onChange={handleChangeForm}
                value={formData.warehouse_name}
                className="wh-new__formfield"
              />
              <label className="wh-new__form-label">
                <h3>Street Address</h3>
              </label>
              <input
                type="text"
                name="address"
                onChange={handleChangeForm}
                value={formData.address}
                className="wh-new__formfield"
              />
              <label className="wh-new__form-label">
                <h3>City</h3>
              </label>
              <input
                type="text"
                name="city"
                onChange={handleChangeForm}
                value={formData.city}
                className="wh-new__formfield"
              />
              <label className="wh-new__form-label">
                <h3>Country</h3>
              </label>
              <input
                type="text"
                name="country"
                onChange={handleChangeForm}
                value={formData.country}
                className="wh-new__formfield"
              />
            </div>
            <div className="wh-new__contactform-container">
              <h2 className="wh-new__details-header">Contact Details</h2>
              <label className="wh-new__form-label">
                <h3>Contact Name</h3>
              </label>
              <input
                type="text"
                name="contact_name"
                onChange={handleChangeForm}
                value={formData.contact_name}
                className="wh-new__formfield"
              />
              <label className="wh-new__form-label">
                <h3>Position</h3>
              </label>
              <input
                type="text"
                name="contact_position"
                onChange={handleChangeForm}
                value={formData.contact_position}
                className="wh-new__formfield"
              />
              <label className="wh-new__form-label">
                <h3>Phone Number</h3>
              </label>
              <input
                type="text"
                name="contact_phone"
                onChange={handleChangeForm}
                value={formData.contact_phone}
                className="wh-new__formfield"
              />
              <label className="wh-new__form-label">
                <h3>Email</h3>
              </label>
              <input
                type="text"
                name="contact_email"
                onChange={handleChangeForm}
                value={formData.contact_email}
                className="wh-new__formfield"
              />
            </div>
          </div>
          <section className="wh-new__cta">
            <button
              className="wh-new__button-reset"
              type="reset"
              onClick={handleCancelClick}
            >
              <h3 className="wh-new__cancel-text">Cancel</h3>
            </button>
            <button className="wh-new__button-save" type="submit">
              <h3 className="wh-new__button-text">+ Add Warehouse</h3>
            </button>
          </section>
        </form>
      </div>
    </>
  );
}

export default WarehouseAddForm;
