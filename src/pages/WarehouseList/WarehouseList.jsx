import React, { useEffect, useState } from "react";
import "./WarehouseList.scss";
import TrashBin from "../../assets/Icons/delete_outline-24px.svg";
import EditButton from "../../assets/Icons/edit-24px.svg";
import axios from "axios";




function WarehouseList({ onWarehouseClick }) {
  //create a state variable called warehouses

  const [warehouses, setWarehouses] = useState([]);


  useEffect(() => {
    const fetchWarehouses = async () => {

      const response = await axios.get("http://localhost:8080/warehouses");
      console.log(response.data)
      setWarehouses(response.data)
    }
    fetchWarehouses();
  }, []
  )






  return (
    <div className="warehouses">
      <header className="warehouses__header">
        <h1 className="warehouses__title">Warehouses</h1>
        <div className="warehouses__actions">
          <input
            type="text"
            className="warehouses__search"
            placeholder="Search..." run
            disabled
          />
          <button className="warehouses__add-button">
            + Add New Warehouse
          </button>
        </div>
      </header>
      <table className="warehouses__table">
        <thead>
          <tr>
            <th>Warehouse</th>
            <th>Address</th>
            <th>Contact Name</th>
            <th>Contact Information</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {warehouses.map((warehouse) => (
            <tr
              key={warehouse.id}
              className="warehouses__row"
              onClick={() => onWarehouseClick(warehouse.id)}
            >
              <td>{warehouse.name}</td>
              <td>{`${warehouse.address}, ${warehouse.city}, ${warehouse.country}`}</td>
              <td>{warehouse.contact_name}</td>
              <td>
                {warehouse.contact_phone}
                <br />
                {warehouse.contact_email}
              </td>
              <td>
                <img
                  className="warehouse__icon"
                  src={TrashBin}
                  alt="Delete Warehouse"
                />
                <img
                  className="warehouse__icon"
                  src={EditButton}
                  alt="Edit Warehouse"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default WarehouseList;
