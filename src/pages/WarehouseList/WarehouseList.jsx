import React, { useEffect, useState } from "react";
import "./WarehouseList.scss";
import TrashBin from "../../assets/Icons/delete_outline-24px.svg";
import EditButton from "../../assets/Icons/edit-24px.svg";
import ChevronRight from "../../assets/Icons/chevron_right-24px.svg";
import SortButton from "../../assets/icons/sort-24px.svg";
import axios from "axios";
import { Link } from "react-router-dom";
import DeleteWarehouse from "../../components/DeleteWarehouse/DeleteWarehouse.jsx";

function WarehouseList() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [warehouses, setWarehouses] = useState([]);
  const [warehouseInfo, setWarehouseInfo] = useState({});
  const [sortField, setSortField] = useState(null);
  const [sortAscending, setSortAscending] = useState(true);

  const trashClickHandler = () => setIsModalOpen(true);
  const trashIdHandler = (warehouse) => setWarehouseInfo(warehouse);

  const getWarehouses = (field, ascending) => {
    const sortedWarehouses = [...warehouses].sort((a, b) => {
      const valA = a[field]?.toString().toLowerCase();
      const valB = b[field]?.toString().toLowerCase();
      return ascending ? valA.localeCompare(valB) : valB.localeCompare(valA);
    });
    setWarehouses(sortedWarehouses);
    setSortField(field);
    setSortAscending(ascending);
  };

  useEffect(() => {
    const fetchWarehouses = async () => {
      try {
        const response = await axios.get("http://localhost:8080/warehouses");
        setWarehouses(response.data);
      } catch (error) {
        console.error("Error fetching warehouses:", error);
      }
    };
    fetchWarehouses();
  }, [isModalOpen]);

  return (
    <>
      {isModalOpen && (
        <DeleteWarehouse
          setIsModalOpen={setIsModalOpen}
          warehouseInfo={warehouseInfo}
        />
      )}

      {/* Main Wrapper for Header and Body */}
      <div className="warehouses-main-wrapper">
        <div className="warehouses-wrapper">
          {/* Desktop/Tablet Header */}
          <div className="warehouses__header">
            <h1 className="warehouses__title">Warehouses</h1>
            <div className="warehouses__actions">
              <input
                type="text"
                className="warehouses__search"
                placeholder="Search..."
              />
              <Link to="/warehouses/add">
                <button className="warehouses__add-button">
                  + Add New Warehouse
                </button>
              </Link>
            </div>
          </div>

          {/* Mobile Header */}
          <div className="warehouses__header-mobile">
            <h1 className="warehouses__title">Warehouses</h1>
            <div className="warehouses__actions">
              <input
                type="text"
                className="warehouses__search"
                placeholder="Search..."
              />
              <Link to="/warehouses/add">
                <button className="warehouses__add-button">
                  + Add New Warehouse
                </button>
              </Link>
            </div>
          </div>

          {/* Mobile View */}
          <div className="warehouses__mobile">
            {warehouses.map((warehouse) => (
              <div key={warehouse.id} className="warehouses__mobile-card">
                <div className="mobile-card-section">
                  <div className="mobile-card-title">Warehouse</div>
                  <div className="mobile-card-details">
                    <Link
                      className="warehouses__link"
                      to={`/warehouses/${warehouse.id}`}
                    >
                      {warehouse.warehouse_name}
                    </Link>
                    <img
                      className="warehouses__chevron"
                      src={ChevronRight}
                      alt="Chevron"
                    />
                  </div>
                </div>

                <div className="mobile-card-section">
                  <div className="mobile-card-title">Address</div>
                  <div>{`${warehouse.address}, ${warehouse.city}, ${warehouse.country}`}</div>
                </div>

                <div className="mobile-card-section">
                  <div className="mobile-card-title">Contact Name</div>
                  <div>{warehouse.contact_name}</div>
                </div>

                <div className="mobile-card-section">
                  <div className="mobile-card-title">Contact Info</div>
                  <div>
                    {warehouse.contact_phone}
                    <br />
                    {warehouse.contact_email}
                  </div>
                </div>

                <div className="mobile-card-actions">
                  <img
                    className="warehouse__icon"
                    src={TrashBin}
                    alt="Delete"
                    onClick={() => trashClickHandler(warehouse)}
                  />
                  <Link to={`/warehouses/edit/${warehouse.id}`}>
                    <img
                      className="warehouse__icon"
                      src={EditButton}
                      alt="Edit"
                    />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop/Table View */}
          <table className="warehouses__table">
            <thead>
              <tr>
                <th
                  onClick={() =>
                    getWarehouses("warehouse_name", !sortAscending)
                  }
                >
                  Warehouse
                  <img
                    className={`warehouses__icon ${
                      sortField === "warehouse_name" && sortAscending
                        ? "ascending"
                        : ""
                    }`}
                    src={SortButton}
                    alt="Sort"
                  />
                </th>
                <th onClick={() => getWarehouses("address", !sortAscending)}>
                  Address
                  <img
                    className={`warehouses__icon ${
                      sortField === "address" && sortAscending
                        ? "ascending"
                        : ""
                    }`}
                    src={SortButton}
                    alt="Sort"
                  />
                </th>
                <th
                  onClick={() => getWarehouses("contact_name", !sortAscending)}
                >
                  Contact Name
                  <img
                    className={`warehouses__icon ${
                      sortField === "contact_name" && sortAscending
                        ? "ascending"
                        : ""
                    }`}
                    src={SortButton}
                    alt="Sort"
                  />
                </th>
                <th
                  onClick={() => getWarehouses("contact_phone", !sortAscending)}
                >
                  Contact Info
                  <img
                    className={`warehouses__icon ${
                      sortField === "contact_phone" && sortAscending
                        ? "ascending"
                        : ""
                    }`}
                    src={SortButton}
                    alt="Sort"
                  />
                </th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {warehouses.map((warehouse) => (
                <tr key={warehouse.id} className="warehouses__row">
                  <td>
                    <div className="warehouses__details">
                      <Link
                        className="warehouses__link"
                        to={`/warehouses/${warehouse.id}`}
                      >
                        {warehouse.warehouse_name}
                      </Link>
                      <img
                        className="warehouses__chevron"
                        src={ChevronRight}
                        alt="Chevron"
                      />
                    </div>
                  </td>
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
                      alt="Delete"
                      onClick={() => trashClickHandler(warehouse)}
                    />
                    <Link to={`/warehouses/edit/${warehouse.id}`}>
                      <img
                        className="warehouse__icon"
                        src={EditButton}
                        alt="Edit"
                      />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default WarehouseList;
