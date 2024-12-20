import './WarehouseDetails.scss'
import { useEffect, useState } from 'react';
import WarehouseDetailsComponent from '../../components/WarehouseDetailsComponent/WarehouseDetailsComponent';
import WarehouseInventoryItems from '../../components/WarehouseInventoryItems/WarehouseInventoryItems';
import Warehouse from '../Warehouse/Warehouse';
import { useParams } from 'react-router-dom';

function WarehouseDetails () {
    const { id } = useParams();
    const [warehousedetails, setWarehouseDetails] = useState([]);

    useEffect(() => {}, [id]);


return (
    <>
    <WarehouseDetailsComponent warehouseId={id} />
    <WarehouseInventoryItems warehouseId={id} />
    </>
);

}

export default WarehouseDetails;