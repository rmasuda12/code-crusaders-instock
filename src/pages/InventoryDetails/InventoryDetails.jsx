import './InventoryDetails.scss'
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function InventoryDetails () {

    const params = useParams();
    const [InventoryDetails, setInventoryDetails] = useState({});

// Get warehouse details from the API based on id

    async function getInventoryDetails() {
        try {
            const response = await axios.get(`http://localhost:8080/inventories/${params.id}`);
            setInventoryDetails(response.data[0]);
        } catch (error) {
            console.log("Error: get inventories function failed")
        }
    }
    
    useEffect(() => {
        getInventoryDetails();
    }, [params.id]);

    console.log("this is inventory item",InventoryDetails)

return (
    <>
    <div className='page-container'>
    <section className='details'>
        <section className='details__header'>
            <Link to={'/inventories'} className='details__arrow'>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z" fill="#2E66E6"/>
                </svg>  
            </Link>
           
            <h1 className='details__city'>{InventoryDetails.item_name}</h1>
            <Link to={'/'} className='details__edit'>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 17.25V21H6.75L17.81 9.94L14.06 6.19L3 17.25ZM20.71 7.04C21.1 6.65 21.1 6.02 20.71 5.63L18.37 3.29C17.98 2.9 17.35 2.9 16.96 3.29L15.13 5.12L18.88 8.87L20.71 7.04V7.04Z" fill="#FFFFFF"/>
                </svg>
            </Link>
            
            <Link to={'/'} className='details__edit--hidden'>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 17.25V21H6.75L17.81 9.94L14.06 6.19L3 17.25ZM20.71 7.04C21.1 6.65 21.1 6.02 20.71 5.63L18.37 3.29C17.98 2.9 17.35 2.9 16.96 3.29L15.13 5.12L18.88 8.87L20.71 7.04V7.04Z" fill="#FFFFFF"/>
                </svg>Edit
            </Link>
        </section>
        
        <section className='details__container'>
            <div className=''>

            </div>
            <div className='details__description'>
                <h4 className='details__subtitle'>ITEM DESCRIPTION:</h4>
                <p className='details__text'>{`${InventoryDetails.description}`}</p>
            </div>
            <div className='details__category'>
                <h4 className='details__subtitle'>CATEGORY:</h4>
                <p className='details__text'>{`${InventoryDetails.category}`}</p>
            </div>
            <div className='details__'>
                <div className='details__Status'>
                    <h4 className='details__subtitle'>STATUS:</h4>
                    <p className='details__text'>{`${InventoryDetails.status}`}</p>
                </div>
                <div className='details__Status'>
                    <h4 className='details__subtitle'>QUANTITY:</h4>
                    <p className='details__text'>{`${InventoryDetails.quantity}`}</p>
                </div>
                <div className='details__Status'>
                    <h4 className='details__subtitle'>WAREHOUSE:</h4>
                    <p className='details__text'>{`${InventoryDetails.warehouse_name}`}</p>
                </div>
            </div>
        </section>
    </section>
    </div>
    </>
);

}

export default InventoryDetails;