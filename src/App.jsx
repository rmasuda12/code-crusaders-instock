import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inventory from "./pages/Inventory/Inventory.jsx";
import InventoryAdd from "./pages/InventoryAdd/InventoryAdd.jsx";
import InventoryDetails from "./pages/InventoryDetails/InventoryDetails.jsx";
import InventoryEdit from "./pages/InventoryEdit/InventoryEdit.jsx";

import Warehouse from "./pages/Warehouse/Warehouse.jsx";
import WarehouseAdd from "./pages/WarehouseAdd/WarehouseAdd";
import WarehouseDetails from "./pages/WarehouseDetails/WarehouseDetails.jsx";
import WarehouseEdit from "./pages/WarehouseEdit/WarehouseEdit.jsx";
import WarehouseItems from "./components/WarehouseItems/WarehouseItems.jsx";

import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/warehouseadd" element={<WarehouseAdd />} />
        <Route path="/warehouse" element={<Warehouse />} />
        <Route path="/warehousedetails" element={<WarehouseDetails />} />
        <Route path="/warehouseedit" element={<WarehouseEdit />} />
        <Route path="/warehouselist" element={<WarehouseList />} />
        <Route path="/warehouseitems" element={<WarehouseItems />} />

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
