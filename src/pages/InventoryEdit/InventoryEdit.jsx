import './InventoryEdit.scss'
import arrowBack from '../../assets/icons/arrow_back-24px.svg';
import InventoryEditForm from '../../components/InventoryEditForm/InventoryEditForm';
import { NavLink } from 'react-router-dom';



function InventoryEdit(){
  
    return(

      <section className='itemDetails'>

         <div className='itemDetails__container'>
            <article className='itemDetails__wrap'>
               <NavLink className='itemDetails__arrow' to='/inventories'>
               <img src={arrowBack} alt='back arrow' />
               </NavLink>
               
               <h1 className='itemDetails__item'> Edit Inventory Item</h1>
            </article> 

            <InventoryEditForm />
           
         </div> 

      </section>
    )
}
export default InventoryEdit;