import './InventoryAdd.scss';
import arrowBack from '../../assets/icons/arrow_back-24px.svg';
import InventoryAddForm from '../../components/InventoryAddForm/InventoryAddForm';
import { NavLink } from 'react-router-dom';




function InventoryAdd(){



  return(
  <section className='itemDetails'>

    <div className='itemDetails__container'>
       <article className='itemDetails__wrap'>
          <NavLink to='/inventories'>
          <img src={arrowBack} alt='back arrow' className='item__icon' />
          </NavLink>
          <h1 className='item__item'>Add New Inventory Item</h1>
       </article> 

       <InventoryAddForm />
      
    </div> 

 </section>
  )
}
export default InventoryAdd;