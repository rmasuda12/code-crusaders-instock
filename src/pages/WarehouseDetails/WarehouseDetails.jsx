import './WarehouseDetails.scss'
import { useEffect, useState } from 'react';
import WarehouseDetailsComponent from '../../components/WarehouseDetailsComponent/WarehouseDetailsComponent';
import WarehouseInventoryItems from '../../components/WarehouseInventoryItems/WarehouseInventoryItems';
import Warehouse from '../Warehouse/Warehouse';

function WarehouseDetails () {

    const [warehousedetails, setWarehouseDetails] = useState([]);

    useEffect(() => {}, []);


return (
    <>
    <WarehouseDetailsComponent />
    <WarehouseInventoryItems />
    </>
);

}

export default WarehouseDetails;