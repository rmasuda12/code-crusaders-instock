import React, { useEffect, useState } from "react";
import "./InventoryList.scss";
import axios from "axios";
import DeleteInventory from "../../components/DeleteInventory/DeleteInventory.jsx";
import Inventory from "../../components/Inventory/Inventory.jsx";
import { Link } from "react-router-dom";

axios.defaults.baseURL = "http://localhost:8080/inventories";

function InventoryList({ onInventoryClick }) {

    return (
        <>
            <div className="inventories-list__container">
                <section className="inventories-list__card">
                    <section className="inventories">
                        <header className="inventories__header">
                            <h1 className="inventories__title">Inventory</h1>
                            <div className="inventories__actions">
                                <input type="text"
                                    className="inventories__search" placeholder="Search..." disabled>
                                </input>
                                <Link to={"/inventories/add"} className="inventories__container-add-button">
                                    <button className="inventories__add-button" >+ Add New Item</button>
                                </Link>
                                
                            </div>
                        </header>
                    </section>
                    <Inventory />
                </section> 
            </div>
        </>
    );
}

export default InventoryList;
