import './Header.scss';
import {Link} from 'react-router-dom';
import logo from '../../assets/Logo/InStock-Logo_1x.png';

function Header(){

    return(
        <header className='header'>
             <Link>
             <img className='header-logo' src= {logo} alt="Instock logo" />

             </Link>

             <nav className='header-nav'>
                <ul className='header-nav__list'>
                    
                    <Link className='header-nav__link' to='/warehouse'>
                    <li className='header-nav__item-h3' >Warehouses</li>
                    </Link>
                    
                    <Link className='header-nav__link'  to='/inventory'>
                    <li className='header-nav__item-h3'>Inventory</li>
                    </Link>
                   
                </ul>

             </nav>
        </header>
    )
}
export default Header;