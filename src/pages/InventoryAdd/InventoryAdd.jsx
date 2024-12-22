import './InventoryAdd.scss';
import arrowBack from '../../assets/icons/arrow_back-24px.svg';
import InventoryAddForm from '../../components/InventoryAddForm/InventoryAddForm';




function InventoryAdd(){



  return(
  <section className='itemDetails'>

    <div className='itemDetails__container'>
       <article className='itemDetails__wrap'>
          <img src={arrowBack} alt='back arrow' className='itemDetails__icon' />
          <h1 className='wh-edit__header-text'>Add New Inventory Item</h1>
       </article> 

       <InventoryAddForm />
      
    </div> 

 </section>
  )
}
export default InventoryAdd;