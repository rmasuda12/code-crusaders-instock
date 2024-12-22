import './InventoryEdit.scss'
import arrowBack from '../../assets/icons/arrow_back-24px.svg';
import InventoryEditForm from '../../components/InventoryEditForm/InventoryEditForm';
import { useNavigate,useParams } from 'react-router-dom';



function InventoryEdit(){
  
    return(

      <section className='itemDetails'>

         <div className='itemDetails__container'>
            <article className='itemDetails__wrap'>
               <img src={arrowBack} alt='back arrow' className='itemDetails__icon' />
               <h1 className='wh-edit__header-text'> Edit Inventory Item</h1>
            </article> 

            <InventoryEditForm />
           
         </div> 

      </section>
    )
}
export default InventoryEdit;