import './WarehouseMobile.scss';
import { Link, NavLink, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import DeleteWarehouse from '../DeleteWarehouse/DeleteWarehouse';

function Inventory () {
    const [warehouses, setWarehouses] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [warehouseInfo, setWarehouseInfo] = useState({});
  
    function trashClickHander() {
      setIsModalOpen(true);
    }
    function trashIdHandler(warehouse) {
      setWarehouseInfo(warehouse)
    }

    async function getWarehouses() {
        try {
            const response = await axios.get(`http://localhost:8080/warehouses`);
            setWarehouses(response.data); 
        } catch (error) {
            console.log("failed get request for warehouses")
        }
    }

    useEffect(() => {
        getWarehouses();
    }, [isModalOpen]);
   

    return (
        <>
        {isModalOpen ? <DeleteWarehouse setIsModalOpen={setIsModalOpen} warehouseInfo={warehouseInfo}/>: ""}
            
            <section className='inventory-details'>   
                {warehouses.map((item) => (
                <div className='mobile'>
                <section key={item.id} className="inventory-details__mobile">
                    <div className='test-wrapper'>
                    <h4 className='item_label'>INVENTORY ITEM</h4>
                    <NavLink to={`/warehouses/${item.id}`}>
                        <h3 className='inventory-details__click-item '>{item.warehouse_name} 
                            <svg className='inventory-details__chevron' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.99997 6L8.58997 7.41L13.17 12L8.58997 16.59L9.99997 18L16 12L9.99997 6Z" fill="#2E66E6"/>
                            </svg>
                        </h3>
                    </NavLink>
                    <h4 className='item_label'>ADDRESS</h4>
                    <p className='item_value '>{item.address}</p>
                    </div>
                    <div className='another-wrapper'>
                    <h4 className='item_label'>CONTACT NAME</h4>
                    <p className='item_value '>{item.contact_name}</p>
                    <h4 className='item_label'>WAREHOUSE</h4>
                    <p className='item_value'>{item.warehouse_name}</p>
                    </div>
                </section>
                <section className='icons-wrapper'>
                        <div className='inventory-details__delete' onClick={()=>{trashClickHander();trashIdHandler(item);}}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 19C6 20.1 6.9 21 8 21H16C17.1 21 18 20.1 18 19V7H6V19ZM8 9H16V19H8V9ZM15.5 4L14.5 3H9.5L8.5 4H5V6H19V4H15.5Z" fill="#C94515"/>
                            </svg>
                        </div>
                        <Link to={`/warehouses/edit/${item.id}`}>
                            <p className='inventory-details__edit'>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3 17.25V21H6.75L17.81 9.94L14.06 6.19L3 17.25ZM20.71 7.04C21.1 6.65 21.1 6.02 20.71 5.63L18.37 3.29C17.98 2.9 17.35 2.9 16.96 3.29L15.13 5.12L18.88 8.87L20.71 7.04V7.04Z" fill="#2E66E6"/>
                                </svg>
                            </p>
                        </Link>
                </section>
                </div>
                ))}
           
            </section>
        </>
    );
}

export default Inventory;