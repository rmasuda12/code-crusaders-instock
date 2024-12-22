import './InventoryDetails.scss';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function InventoryDetails () {

    const params = useParams();
    const navigate = useNavigate();
    const [InventoryDetails, setInventoryDetails] = useState({});

// Get warehouse details from the API based on id

    async function getInventoryDetails() {
        try {
            const response = await axios.get(`http://localhost:8080/inventories/${params.id}`);
            console.log(response)
            setInventoryDetails(response.data);
        } catch (error) {
            console.log(`Error: api call was not able to retrieve desired inventory item with id:${params.id}`);
            navigate("notfound", { replace: true });
        }
    }
    
    useEffect(() => {
        getInventoryDetails();
    }, [params.id]);

    console.log("this is inventory item",InventoryDetails)

return (
    <>
    <div className='page-container'>
    <section className='item'>
        <section className='item__header'>
            <Link to={'/inventories'} className='item__arrow'>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z" fill="#2E66E6"/>
                </svg>  
            </Link>
           
            <h1 className='item__item'>{InventoryDetails.item_name}</h1>
            <Link to={`/inventories/edit/${params.id}`} className='item__edit'>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 17.25V21H6.75L17.81 9.94L14.06 6.19L3 17.25ZM20.71 7.04C21.1 6.65 21.1 6.02 20.71 5.63L18.37 3.29C17.98 2.9 17.35 2.9 16.96 3.29L15.13 5.12L18.88 8.87L20.71 7.04V7.04Z" fill="#FFFFFF"/>
                </svg>
            </Link>
            
            <Link to={`/inventories/edit/${params.id}`} className='item__edit--hidden'>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 17.25V21H6.75L17.81 9.94L14.06 6.19L3 17.25ZM20.71 7.04C21.1 6.65 21.1 6.02 20.71 5.63L18.37 3.29C17.98 2.9 17.35 2.9 16.96 3.29L15.13 5.12L18.88 8.87L20.71 7.04V7.04Z" fill="#FFFFFF"/>
                </svg>
                <h3>Edit</h3>
            </Link>
        </section>
        <section className='item__container'>
        <section className='item__description-category'>
            <div className='item__description'>
                <h4 className='item__subtitle'>ITEM DESCRIPTION:</h4>
                <p className='item__text--mod'>{`${InventoryDetails.description}`}</p>
            </div>
            <div className='item__category'>
                <h4 className='item__subtitle'>CATEGORY:</h4>
                <p className='item__text'>{`${InventoryDetails.category}`}</p>
            </div>
        </section>
        <section className='item__extra-info'>
            <div className='item__status-quantity'>
                <div className='item__status'>
                    <h4 className='item__subtitle'>STATUS:</h4>
                    {InventoryDetails.status==='In Stock'?         
                    <p className='item__stock'>IN STOCK</p>:
                    <p className='item__stock--not'>OUT OF STOCK</p>
                    }
                </div>
                <div className='item__quantity'>
                    <h4 className='item__subtitle'>QUANTITY:</h4>
                    <p className='item__text--mod'>{`${InventoryDetails.quantity}`}</p>
                </div>
            </div>
                <div className='item__Status'>
                    <h4 className='item__subtitle'>WAREHOUSE:</h4>
                    <p className='item__text'>{`${InventoryDetails.warehouse_name}`}</p>
                </div>
        </section>
        </section>
    </section>
    </div>
    </>
);

}

export default InventoryDetails;