import './WarehouseDetails.scss'
import { useEffect, useState } from 'react';
import WarehouseDetailsComponent from '../../components/WarehouseDetailsComponent/WarehouseDetailsComponent';

function WarehouseDetails () {

    const [warehousedetails, setWarehouseDetails] = useState([]);

    useEffect(() => {}, []);


return (
    <>
    <WarehouseDetailsComponent />
    <WarehouseInventoryList />
    
    </>
);

}

export default WarehouseDetails;