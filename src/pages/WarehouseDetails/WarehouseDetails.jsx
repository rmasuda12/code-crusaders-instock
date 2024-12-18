import './WarehouseDetails.scss'
import { Link } from 'react-router-dom';

function WarehouseDetails () {



return (
    <>
    <section className='details'>
        <section className='details__info'>
            <Link to={'/warehouse'} className='details__arrow'>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z" fill="#2E66E6"/>
                </svg>  
            </Link>
           
            <h1 className='details__city'>Washington</h1>
            <p className='details__edit'>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 17.25V21H6.75L17.81 9.94L14.06 6.19L3 17.25ZM20.71 7.04C21.1 6.65 21.1 6.02 20.71 5.63L18.37 3.29C17.98 2.9 17.35 2.9 16.96 3.29L15.13 5.12L18.88 8.87L20.71 7.04V7.04Z" fill="#FFFFFF"/>
                </svg>
            </p>
             <p className='details__edit--hidden'>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 17.25V21H6.75L17.81 9.94L14.06 6.19L3 17.25ZM20.71 7.04C21.1 6.65 21.1 6.02 20.71 5.63L18.37 3.29C17.98 2.9 17.35 2.9 16.96 3.29L15.13 5.12L18.88 8.87L20.71 7.04V7.04Z" fill="#FFFFFF"/>
                </svg>Edit
            </p>
        </section>
        
        <div className='details__container'>
            <section className='details__address'>
                <p className='details__subtitle'>WAREHOUSE ADDRESS:</p>
                <p className='details__address-info'>33 Pearl Street SW, Washington, USA</p>
            </section>
            <section className='details__contact'>
                <div className='details__name'>
                    <p className='details__subtitle'>CONTACT NAME:</p>
                    <p>Graeme Lyon</p>
                    <p>Warehouse Manager</p>
                </div>
                
                <div className='details__information'>
                    <p className='details__subtitle'>CONTACT INFORMATION:</p>
                    <p>+1(647) 504-0911</p>
                    <p>glyon@instock.com</p>
                </div>
            </section> 
        </div>
    </section>
    
    </>
);

}

export default WarehouseDetails;