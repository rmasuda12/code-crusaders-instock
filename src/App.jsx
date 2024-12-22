import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import InventoryAdd from "./pages/InventoryAdd/InventoryAdd.jsx";
import InventoryDetails from "./pages/InventoryDetails/InventoryDetails.jsx";
import InventoryEdit from "./pages/InventoryEdit/InventoryEdit.jsx";
import WarehouseAdd from "./pages/WarehouseAdd/WarehouseAdd.jsx";
import WarehouseDetails from "./pages/WarehouseDetails/WarehouseDetails.jsx";
import WarehouseEdit from "./pages/WarehouseEdit/WarehouseEdit.jsx";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import WarehouseList from "./pages/WarehouseList/WarehouseList.jsx";
import InventoryList from "./pages/InventoryList/InventoryList.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";
import Inventory from "./components/Inventory/Inventory.jsx";


function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="" element={<WarehouseList />} />
        <Route path="/warehouses" element={<WarehouseList />} />
        <Route path="/warehouses/add" element={<WarehouseAdd />} />
        <Route path="/warehouses/:id" element={<WarehouseDetails />} />
        <Route path="/warehouses/edit/:id" element={<WarehouseEdit />} />

        <Route path="/inventories" element={<InventoryList/>} />
        <Route path="/inventories/add" element={<InventoryAdd />} />
        <Route path="/inventories/:id" element={<InventoryDetails />} />
        <Route path="/inventories/edit/:id" element={<InventoryEdit />} />
        <Route path="*" element={<NotFound/>}/>
      </Routes> 

     

      <Footer />
    </BrowserRouter>
  );
}

export default App;
