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
                    <li className='header-nav__item'>Warehouses</li>
                    <li className='header-nav__item'>Inventory</li>
                </ul>

             </nav>
        </header>
    )
}
export default Header;