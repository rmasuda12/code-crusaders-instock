import './InventoryEdit.scss'
import arrowBack from '../../assets/icons/arrow_back-24px.svg';
import ItemDetailsForm from '../../components/ItemDetailsForm/ItemDetailsForm';
import ItemAvailability from '../../components/ItemAvailability/ItemAvailability';


function InventoryEdit(){

    return(
        <section className='itemDetails'>

        

        <div className='itemDetails__container'>

           <article className='itemDetails__wrap'>
               <img className='itemDetails__icon' src={arrowBack} alt="arrow Icon" />
               <h1>Edit Inventory Item</h1>

           </article>

          <div className='itemDetails__container-flex'>

            <ItemDetailsForm />
            
            <hr />
            
            <ItemAvailability />
          
          </div>

          <div className='itemDetails__btn-frame'>

          <button className='itemDetails__btn'>Cancel</button>
          <button className='itemDetails__btn-active'>Save</button>

          </div>
          
         

        </div>

       
          

      </section>
    )
}
export default InventoryEdit;