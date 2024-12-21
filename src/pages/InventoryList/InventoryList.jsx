import React, { useEffect, useState } from "react";
import "./InventoryList.scss";
import axios from "axios";
import DeleteInventory from "../../components/DeleteInventory/DeleteInventory.jsx";
import Inventory from "../../components/Inventory/Inventory.jsx";

axios.defaults.baseURL = "http://localhost:8080/inventories";

function InventoryList({ onInventoryClick }) {
    const [inventories, setInventories] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [inventoryInfo, setInventoryInfo] = useState({});
  
    function trashClickHander() {
      setIsModalOpen(true);
    }
    function trashIdHandler(inventory) {
      setInventoryInfo(inventory)
    }

    useEffect(() => {
        const fetchInventories = async () => {

            const response = await axios.get("http://localhost:8080/inventories");
            console.log(response.data)
            setInventories(response.data)
        }
        fetchInventories();
    }, [isModalOpen]
    )

    return (
        <>
        {isModalOpen ? <DeleteInventory setIsModalOpen={setIsModalOpen} inventoryInfo={inventoryInfo}/>: ""}
        <div className="inventories-list__container">
            <section className="inventories-list__card">
                <section className="inventories">
                    <header className="inventories__header">
                        <h1 className="inventories__title">Inventory</h1>
                        <div className="inventories__actions">
                            <input type="text"
                                className="inventories__search" placeholder="Search..." disabled>
                            </input>
                            <button className="inventories__add-button">+ Add New Item</button>
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
