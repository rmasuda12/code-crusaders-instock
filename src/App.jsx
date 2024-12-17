import './App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inventory from "./pages/Inventory/Inventory.jsx";
import InventoryAdd from "./pages/InventoryAdd/InventoryAdd.jsx";
import InventoryDetails from "./pages/InventoryDetails/InventoryDetails.jsx";
import InventoryEdit from "./pages/InventoryEdit/InventoryEdit.jsx";
import Warehouse from "./pages/Warehouse/Warehouse.jsx";
import WarehouseAdd from "./pages/WarehouseAdd/WarehouseAdd.jsx";
import WarehouseDetails from "./pages/WarehouseDetails/WarehouseDetails.jsx";
import WarehouseEdit from "./pages/WarehouseEdit/WarehouseEdit.jsx";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/warehouse' element={<Warehouse/>}/>
        <Route path='/warehouseadd' element={<WarehouseAdd/>}/>
        <Route path='/warehousedetails' element={<WarehouseDetails/>}/>
        <Route path='/warehouseedit' element={<WarehouseEdit/>}/>
        <Route path='/inventory' element={<Inventory/>}/>
        <Route path='/inventoryadd' element={<InventoryAdd/>}/>
        <Route path='/inventorydetails' element={<InventoryDetails/>}/>
        <Route path='/inventoryedit' element={<InventoryEdit/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
