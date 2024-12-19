import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inventory from "./pages/Inventory/Inventory.jsx";
import InventoryAdd from "./pages/InventoryAdd/InventoryAdd.jsx";
import InventoryDetails from "./pages/InventoryDetails/InventoryDetails.jsx";
import InventoryEdit from "./pages/InventoryEdit/InventoryEdit.jsx";
import Warehouse from "./pages/Warehouse/Warehouse.jsx";
import WarehouseAdd from "./pages/WarehouseAdd/WarehouseAdd.jsx";
import WarehouseDetails from "./pages/WarehouseDetails/WarehouseDetails.jsx";
import WarehouseEdit from "./pages/WarehouseEdit/WarehouseEdit.jsx";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/warehouse" element={<Warehouse />} />
        <Route path="/warehouseadd" element={<WarehouseAdd />} />
        <Route path="/warehouses/:id" element={<WarehouseDetails />} />
        <Route path="/warehouseedit" element={<WarehouseEdit />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/inventoryadd" element={<InventoryAdd />} />
        <Route path="/inventorydetails" element={<InventoryDetails />} />
        <Route path="/inventoryedit" element={<InventoryEdit />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
