import DeleteWarehouse from '../../components/DeleteWarehouse/DeleteWarehouse.jsx';
import { useState } from 'react';

function Warehouse(){

    const [isModalOpen, setIsModalOpen] = useState(true)

    return(
       <>
        {isModalOpen? <DeleteWarehouse setIsModalOpen={setIsModalOpen}/> : ""}
       </>
    )
}
export default  Warehouse;