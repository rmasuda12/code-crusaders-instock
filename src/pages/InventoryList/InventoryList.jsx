import React, { useEffect, useState } from "react";
import "./InventoryList.scss";
import TrashBin from "../../assets/Icons/delete_outline-24px.svg";
import EditButton from "../../assets/Icons/edit-24px.svg";

import SortButton from "../../assets/icons/sort-24px.svg";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:8080/inventories";

function InventoryList({ onInventoryClick }) {
    const [inventories, setInventories] = useState([]);

    useEffect(() => {
        const fetchInventories = async () => {

            const response = await axios.get("http://localhost:8080/inventories");
            console.log(response.data)
            setInventories(response.data)
        }
        fetchInventories();
    }, []
    )

    return (
        <div className="inventories">
            <header className="inventories__header">
                <h1 className="inventories__title">Inventory</h1>
                <div className="inventories__actions">
                    <input
                        type="text"
                        className="inventories__search"
                        placeholder="Search..."
                        disabled
                    />
                    <button className="inventories__add-button">
                        + Add New Inventory
                    </button>
                </div>
            </header>
            <table className="inventories__table">
                <thead>
                    <tr>
                        <th>
                            Inventory Item
                            <img className="inventories__icon" src={SortButton} alt="Sort" />
                        </th>
                        <th>
                            Category
                            <img className="inventories__icon" src={SortButton} alt="Sort" />
                        </th>
                        <th>
                            Status
                            <img className="inventories__icon" src={SortButton} alt="Sort" />
                        </th>
                        <th>
                            QTY
                            <img className="inventories__icon" src={SortButton} alt="Sort" />
                        </th>
                        <th>
                            Warehouse
                            <img className="inventories__icon" src={SortButton} alt="Sort" />
                        </th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {inventories.map((inventory) => (
                        <tr
                            key={inventory.id}
                            className="inventories__row"
                            onClick={() => onInventoryClick(inventory?.id)}
                        >
                            <td>{inventory.item_name}</td>
                            <td>{inventory.category}</td>
                            <td>{inventory.status}</td>
                            <td>{inventory.quantity}</td>
                            <td>{inventory.warehouse_id}</td>
                            <td>
                                <img className="inventory__icon" src={TrashBin} alt="Delete Inventory" />
                                <img className="inventory__icon" src={EditButton} alt="Edit Inventory" />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default InventoryList;
