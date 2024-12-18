import "./WarehouseItem.scss";
import "../../styles/partials/_transitions.scss";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import axios from "axios";
import Delete from "../../assets/icons/delete_outline-24px.svg";
import Edit from "../../assets/icons/edit-24px.svg";
import HeaderArrow from "../../assets/icons/chevron_right-24px.svg";
import Modal from "../Modal/Modal"; // Ensure Modal is imported correctly

export default function WareHouseItem() {
  const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT; // Get the API URL from environment variables
  const [warehouse, setWarehouse] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showWarehouseModal, setShowWarehouseModal] = useState(false);
  const [passedInfo, setPassedInfo] = useState({});

  useEffect(() => {
    const fetchWarehouseData = async () => {
      try {
        const response = await axios.get(`${API_ENDPOINT}/warehouses`);
        setWarehouse(response?.data || []); // Optional chaining to handle null/undefined responses
      } catch (error) {
        console.error("Failed to fetch warehouse data:", error);
        alert("An error occurred while fetching data. Please try again later.");
      }
    };
    fetchWarehouseData();
  }, [API_ENDPOINT, showModal]);

  const deleteHandler = (id, name) => {
    setShowModal(true);
    setShowWarehouseModal(true);
    setPassedInfo({ id, name });
  };

  return (
    <>
      <CSSTransition
        in={showModal}
        timeout={250}
        classNames="fade"
        unmountOnExit
      >
        <Modal
          showModal={showModal}
          setShowModal={setShowModal}
          showWarehouseModal={showWarehouseModal}
          setShowWarehouseModal={setShowWarehouseModal}
          passedInfo={passedInfo}
        />
      </CSSTransition>

      <div className="warehouse-container">
        {warehouse.map((item) => (
          <div key={item.id} className="row">
            <div className="item item-warehouse">
              <p className="item__header">WAREHOUSE</p>
              <Link className="linkDetails" to={`/warehouse/${item.id}`}>
                <div className="warehouse-link">
                  <button className="item__warehouse">
                    {item.warehouse_name}
                  </button>
                  <img src={HeaderArrow} alt="header arrow" />
                </div>
              </Link>
            </div>
            <div className="item item-name">
              <p className="item__header">CONTACT NAME</p>
              <p className="item__name">{item.contact_name}</p>
            </div>
            <div className="item item-address">
              <p className="item__header">ADDRESS</p>
              <p className="item__address">{item.address}</p>
            </div>
            <div className="item item-contact">
              <p className="item__header">CONTACT INFORMATION</p>
              <p className="item__email">{item.contact_phone}</p>
            </div>
            <div className="actions">
              <button
                onClick={() => deleteHandler(item.id, item.warehouse_name)}
                className="actions__delete"
              >
                <img src={Delete} alt="delete icon" />
              </button>

              <Link className="actions__edit" to={`warehouse/${item.id}/edit`}>
                <img src={Edit} alt="edit icon" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
