import './inventory.scss';


import './Inventory.scss'
import { Link, NavLink, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import DeleteInventory from '../DeleteInventory/DeleteInventory';

function Inventory () {
    const [inventoryDetails, setInventoryDetails] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [inventoryInfo, setInventoryInfo] = useState({});
  
    function trashClickHander() {
      setIsModalOpen(true);
    }
    function trashIdHandler(inventory) {
      setInventoryInfo(inventory)
    }

    async function getWarehouseInventory() {
        const response = await axios.get(`http://localhost:8080/inventories`);
            setInventoryDetails(response.data);
    }

    useEffect(() => {
        getWarehouseInventory();
    }, [isModalOpen]);
   

    return (
        <>
        {isModalOpen ? <DeleteInventory setIsModalOpen={setIsModalOpen} inventoryInfo={inventoryInfo}/>: ""}
            <section className='inventory-details__hidden'>
                <h4 className='inventory-details__hidden-icon'>
                    INVENTORY ITEM
                    <svg width="24" height="19" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 5.83L15.17 9L16.58 7.59L12 3L7.41003 7.59L8.83003 9L12 5.83ZM12 18.17L8.83003 15L7.42003 16.41L12 21L16.59 16.41L15.17 15L12 18.17Z" fill="#5C667E"/>
                    </svg>
                </h4>
                <h4 className='inventory-details__hidden-icon'>
                    CATEGORY
                    <svg width="24" height="19" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 5.83L15.17 9L16.58 7.59L12 3L7.41003 7.59L8.83003 9L12 5.83ZM12 18.17L8.83003 15L7.42003 16.41L12 21L16.59 16.41L15.17 15L12 18.17Z" fill="#5C667E"/>
                    </svg>
                </h4>
                <h4 className='inventory-details__hidden-icon--status'>
                    STATUS
                    <svg width="24" height="19" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 5.83L15.17 9L16.58 7.59L12 3L7.41003 7.59L8.83003 9L12 5.83ZM12 18.17L8.83003 15L7.42003 16.41L12 21L16.59 16.41L15.17 15L12 18.17Z" fill="#5C667E"/>
                    </svg>
                </h4>
                <h4 className='inventory-details__hidden-icon'>
                    QTY
                    <svg width="24" height="19" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 5.83L15.17 9L16.58 7.59L12 3L7.41003 7.59L8.83003 9L12 5.83ZM12 18.17L8.83003 15L7.42003 16.41L12 21L16.59 16.41L15.17 15L12 18.17Z" fill="#5C667E"/>
                    </svg>
                </h4>
                 <h4 className='inventory-details__hidden-icon'>
                    WAREHOUSE
                    <svg width="24" height="19" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 5.83L15.17 9L16.58 7.59L12 3L7.41003 7.59L8.83003 9L12 5.83ZM12 18.17L8.83003 15L7.42003 16.41L12 21L16.59 16.41L15.17 15L12 18.17Z" fill="#5C667E"/>
                    </svg>
                </h4>
                <h4>ACTIONS</h4>
            </section>
        
            
            <section className='inventory-details'>   
                {inventoryDetails.map((item) => (
                <div className='tablet' key={item.id}>
                <section key={item.id} className="inventory-details__container-i">
                    <h4 className='inventory-details__items'>INVENTORY ITEM:</h4>
                    <NavLink to={`/inventories/${item.id}`} className='column'>
                        <h3 className='inventory-details__click-item '>{item.item_name} 
                            <svg className='inventory-details__chevron' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.99997 6L8.58997 7.41L13.17 12L8.58997 16.59L9.99997 18L16 12L9.99997 6Z" fill="#2E66E6"/>
                            </svg>
                        </h3>
                    </NavLink>
                    <h4 className='inventory-details__items'>CATEGORY:</h4>
                    <p className='inventory-details__click-item-value-i column'>{item.category}</p>
                    <h4 className='inventory-details__items'>STATUS:</h4>
                    <div className='column'>
                        <h3 className={`inventory-details__status ${item.status === 'In Stock' ? 'in-stock' : 'out-of-stock'}`}>
                            {item.status}
                        </h3>
                    </div>
                    <h4 className='inventory-details__items'>QTY:</h4>
                    <p className='inventory-details__quantity-value column'>{item.quantity}</p>
                    <h4 className='inventory-details__items'>WAREHOUSE:</h4>
                    <p className='inventory-details__quantity-value column'>{item.warehouse_name}</p>
           
                    <section className='inventory-details__icons-i'>
                        <div className='inventory-details__delete' onClick={()=>{trashClickHander();trashIdHandler(item);}}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 19C6 20.1 6.9 21 8 21H16C17.1 21 18 20.1 18 19V7H6V19ZM8 9H16V19H8V9ZM15.5 4L14.5 3H9.5L8.5 4H5V6H19V4H15.5Z" fill="#C94515"/>
                            </svg>
                        </div>
                        <Link to={`/inventories/edit/${item.id}`}>
                            <p className='inventory-details__edit'>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3 17.25V21H6.75L17.81 9.94L14.06 6.19L3 17.25ZM20.71 7.04C21.1 6.65 21.1 6.02 20.71 5.63L18.37 3.29C17.98 2.9 17.35 2.9 16.96 3.29L15.13 5.12L18.88 8.87L20.71 7.04V7.04Z" fill="#2E66E6"/>
                                </svg>
                            </p>
                        </Link>
              
                    </section>
            
                </section>
                </div>
                ))}
                {inventoryDetails.map((item) => (
                <div className='mobile' key={item.id}>
                <section key={item.id} className="inventory-details__mobile">
                    <div className='test-wrapper'>
                    <h4 className='item_label'>INVENTORY ITEM</h4>
                    <NavLink to={`/inventories/${item.id}`}>
                        <h3 className='inventory-details__click-item '>{item.item_name} 
                            <svg className='inventory-details__chevron' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.99997 6L8.58997 7.41L13.17 12L8.58997 16.59L9.99997 18L16 12L9.99997 6Z" fill="#2E66E6"/>
                            </svg>
                        </h3>
                    </NavLink>
                    <h4 className='item_label'>CATEGORY</h4>
                    <p className='item_value '>{item.category}</p>
                    </div>
                    <div className='another-wrapper'>
                    <h4 className='item_label'>STATUS</h4>
                    <div className='column'>
                        <h3 className={`inventory-details__status ${item.status === 'In Stock' ? 'in-stock' : 'out-of-stock'}`}>
                            {item.status}
                        </h3>
                    </div>
                    <h4 className='item_label'>QTY</h4>
                    <p className='item_value '>{item.quantity}</p>
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
                        <Link to={`/inventories/edit/${item.id}`}>
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