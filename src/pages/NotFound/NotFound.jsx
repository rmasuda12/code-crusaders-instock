import { Link } from "react-router-dom";
import "./NotFound.scss";

function NotFound() {
    return(
        <>
    <div className='page-container'>
    <section className='notfound'>
        <section className='notfound__header'>
            <h1 className='notfound__item'>404: Not Found</h1>
            <Link to={'/'} className='notfound__edit'>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z" fill="#FFFFF"/>
                </svg>  
            </Link>
            
            <Link to={'/'} className='notfound__edit--hidden'>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z" fill="#FFFFF"/>
                </svg>  
                <h3>Home</h3>
            </Link>
        </section>
        
        <section className='notfound__container'>
        <section className='notfound__description'>
            <p className='notfound__subtitle'>The suggested URL was not found on this server... but in the meantime, enjoy this doggo.</p>
            <img className="notfound__gif" src={"./src/assets/Gifs/dog.gif"}/>
        </section>
        </section>
        </section>
    </div>
        </>
    )
}

export default NotFound;