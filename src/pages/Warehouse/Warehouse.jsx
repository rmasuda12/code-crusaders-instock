//mainpage where we are integrating WarehouseList component
//JiraTicket O24CC-9

import React from "react";
import { useNavigate } from "react-router-dom";
import SearchHeader from "../../components/SearchHeader/SearchHeader";
import WarehouseItems from "../../components/WarehouseItems/WarehouseItems.jsx";

import "../../components/WarehouseItems/WarehouseItems.scss";

const warehouses = () => {
  const navigate = useNavigate();

  // Mocked warehouse data
  const warehouses = [
    {
      id: 1,
      name: "Manhattan",
      address: "503 Broadway, New York, USA",
      contact: "Parmin Aujla",
    },
    {
      id: 2,
      name: "Washington",
      address: "33 Pearl Street SW, Washington, USA",
      contact: "Graeme Lyon",
    },
    {
      id: 3,
      name: "Jersey",
      address: "300 Main Street, New Jersey, USA",
      contact: "Brad MacDonald",
    },
    {
      id: 4,
      name: "San Fran",
      address: "890 Brannan Street, San Francisco, USA",
      contact: "Gary Wong",
    },
  ];

  // Handle clicking on a warehouse
  const handleItemClick = (id) => {
    navigate(`/warehouses/${id}`);
  };

  return (
    <div className="warehouses-container">
      {/* Search Header */}
      <SearchHeader
        title="Warehouses"
        buttonTitle="+ Add New Warehouse"
        buttonLink="/warehouses/add"
      />

      {/* Warehouse List */}
      <div className="warehouses-list">
        {warehouses.map((warehouse) => (
          <WarehouseItems
            key={warehouse.id}
            warehouse={warehouse}
            onItemClick={handleItemClick}
          />
        ))}
      </div>
    </div>
  );
};

export default Warehouses;
