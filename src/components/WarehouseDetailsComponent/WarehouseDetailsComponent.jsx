import './WarehouseDetailsComponent.scss'
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function WarehouseDetailsComponent() {

    const { id } = useParams();
    const [warehouseDetails, setWarehouseDetails] = useState({});

    // Get warehouse details from the API based on id

    async function getWarehouseDetails() {
        const response = await axios.get(`http://localhost:8080/warehouses/${id}`);
        setWarehouseDetails(response.data);
    }

    useEffect(() => {
        getWarehouseDetails();
    }, [id]);

    return (
        <>
            <section className='details'>
                <section className='details__info'>
                    <Link to={'/'} className='details__arrow'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z" fill="#2E66E6" />
                        </svg>
                    </Link>

                    <h1 className='details__city'>{warehouseDetails.warehouse_name}</h1>
                    <Link to={`/warehouses/edit/${id}`} className='details__edit'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 17.25V21H6.75L17.81 9.94L14.06 6.19L3 17.25ZM20.71 7.04C21.1 6.65 21.1 6.02 20.71 5.63L18.37 3.29C17.98 2.9 17.35 2.9 16.96 3.29L15.13 5.12L18.88 8.87L20.71 7.04V7.04Z" fill="#FFFFFF" />
                        </svg>
                    </Link>

                    <Link to={`/warehouses/edit/${id}`} className='details__edit--hidden'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 17.25V21H6.75L17.81 9.94L14.06 6.19L3 17.25ZM20.71 7.04C21.1 6.65 21.1 6.02 20.71 5.63L18.37 3.29C17.98 2.9 17.35 2.9 16.96 3.29L15.13 5.12L18.88 8.87L20.71 7.04V7.04Z" fill="#FFFFFF" />
                        </svg>Edit
                    </Link>
                </section>

                <div className='details__container'>
                    <section className='details__address'>
                        <h4 className='details__subtitle'>WAREHOUSE ADDRESS:</h4>
                        <p className='details__address-info'>{`${warehouseDetails.address}, ${warehouseDetails.city}, ${warehouseDetails.country}`}</p>
                    </section>
                    <section className='details__contact'>
                        <div className='details__name'>
                            <h4 className='details__subtitle'>CONTACT NAME:</h4>
                            <p className='details__first-last-name'>{warehouseDetails.contact_name}</p>
                            <p className='details__job-title'>{warehouseDetails.contact_position}</p>
                        </div>

                        <div className='details__information'>
                            <h4 className='details__subtitle'>CONTACT INFORMATION:</h4>
                            <p className='details__number'>{warehouseDetails.contact_phone}</p>
                            <p className='details__email'>{warehouseDetails.contact_email}</p>
                        </div>
                    </section>
                </div>
            </section>

        </>
    );

}

export default WarehouseDetailsComponent;