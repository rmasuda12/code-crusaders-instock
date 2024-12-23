import './WarehouseDetails.scss'
import { useEffect, useState } from 'react';
import WarehouseDetailsComponent from '../../components/WarehouseDetailsComponent/WarehouseDetailsComponent';
import WarehouseInventoryItems from '../../components/WarehouseInventoryItems/WarehouseInventoryItems';
import { useParams } from 'react-router-dom';

function WarehouseDetails () {
    const { id } = useParams();
    const [warehousedetails, setWarehouseDetails] = useState([]);

    useEffect(() => {}, [id]);


    return (
        <div className='wd__container'>
            <section className='wd__card' >
                <WarehouseDetailsComponent warehouseId={id} />
                <WarehouseInventoryItems warehouseId={id} />
            </section>
        </div>
        
    );

}

export default WarehouseDetails;