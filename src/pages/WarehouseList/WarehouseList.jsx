import React, { useEffect, useState } from "react";
import "./WarehouseList.scss";
import TrashBin from "../../assets/Icons/delete_outline-24px.svg";
import EditButton from "../../assets/Icons/edit-24px.svg";
import ChevronRight from "../../assets/Icons/chevron_right-24px.svg";
import SortButton from "../../assets/icons/sort-24px.svg";
import axios from "axios";
import { Link } from "react-router-dom";
import DeleteWarehouse from "../../components/DeleteWarehouse/DeleteWarehouse.jsx";
import WarehouseMobile from "../../components/WarehouseMobile/WarehouseMobile.jsx"

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
      {isModalOpen ?<DeleteWarehouse setIsModalOpen={setIsModalOpen} warehouseInfo={warehouseInfo}/>: ""}

      {/* Main Wrapper for Header and Body */}
      <div className="warehouses-main-wrapper">
        <div className="warehouses-wrapper">
          {/* Desktop/Tablet Header */}

          {/* Mobile Header */}
          <header className="inventories__header">
                        <h1 className="inventories__title">Warehouses</h1>
                        <div className="inventories__actions">
                            <input type="text"
                                className="inventories__search" placeholder="Search..." disabled>
                            </input>
                            <Link to={"/warehouses/add"} className="inventories__container-add-button">
                                <button className="inventories__add-button" >+ Add New Warehouse</button>
                            </Link>
                            
                        </div>
                    </header>
          <WarehouseMobile/>
          
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
                      onClick={() => {trashClickHandler(); trashIdHandler(warehouse);}}
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
