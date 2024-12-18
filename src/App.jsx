import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Inventory Pages
import Inventory from "./pages/Inventory/Inventory.jsx";
import InventoryAdd from "./pages/InventoryAdd/InventoryAdd.jsx";
import InventoryDetails from "./pages/InventoryDetails/InventoryDetails.jsx";
import WarehouseItem from "./pages/WarehouseItem/WarehouseItem.jsx";
import InventoryEdit from "./pages/InventoryEdit/InventoryEdit.jsx";

// Warehouse Pages
import Warehouse from "./pages/Warehouse/Warehouse.jsx";
import WarehouseAdd from "./pages/WarehouseAdd/WarehouseAdd.jsx";
import WarehouseDetails from "./pages/WarehouseDetails/WarehouseDetails.jsx";
import WarehouseEdit from "./pages/WarehouseEdit/WarehouseEdit.jsx";

// Shared Components
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        {/* Warehouse Routes */}
        <Route path="/warehouses/add" element={<WarehouseAdd />} />
        <Route path="/warehouses" element={<Warehouse />} />
        <Route path="/warehouses/:id/details" element={<WarehouseDetails />} />
        <Route path="/warehouses/:id/edit" element={<WarehouseEdit />} />
        <Route path="/warehouses/:id/item" element={<WarehouseItem />} />

        {/* Inventory Routes */}
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/inventory/add" element={<InventoryAdd />} />
        <Route path="/inventory/:id/details" element={<InventoryDetails />} />
        <Route path="/inventory/:id/edit" element={<InventoryEdit />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
