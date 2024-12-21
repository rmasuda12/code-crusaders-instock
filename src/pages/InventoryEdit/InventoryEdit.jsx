import './InventoryEdit.scss'
import arrowBack from '../../assets/icons/arrow_back-24px.svg';
import InventoryEditForm from '../../components/InventoryEditForm/InventoryEditForm';
import { useNavigate,useParams } from 'react-router-dom';



function InventoryEdit(props){
   const navigate = useNavigate();
    

    function handleFormSave(formData){
        console.log('Save button clicked:', formData);
    }

    function handleCancel(e){
      e.preventDefault();
      console.log('cancel button clicked'); /// clear this
      navigate('/inventorydetails');

  }

    return(

      <section className='itemDetails'>

         <div className='itemDetails__container'>
            <article className='itemDetails__wrap'>
               <img src={arrowBack} alt='back arrow' className='itemDetails__icon' />
               <h1 className='wh-edit__header-text'> Edit Inventory Item</h1>
            </article> 

            <InventoryEditForm />

           <div className='itemDetails__btn-frame'>
             <button  onClick={handleCancel} className='itemDetails__btn-cancel'>Cancel</button>
             <button   onClick={() => handleFormSave()} className='itemDetails__btn-active'>Save</button>
           </div>
           
         </div> 

      </section>
    )
}
export default InventoryEdit;