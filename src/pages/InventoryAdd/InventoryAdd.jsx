import './InventoryAdd.scss';
import arrowBack from '../../assets/icons/arrow_back-24px.svg';
import { useState, useEffect } from 'react';
import axios from 'axios';
// import { useParams} from 'react-router-dom';
import StockQuantity from '../../components/StockQuantity/StockQuantity';



function InventoryAdd(){
    const [openQuantity, setOpenQuantity] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const [inventories, setInventories] = useState([]);
    const [warehouses, setWarehouses] = useState([]);
    // const [inventoryItem, setinventoryItem] = useState([]);

    function handleQuantityClick (){
        setOpenQuantity(!openQuantity);
        setIsChecked(!isChecked);
        
      }

     const [formValues, setFormValues] = useState({
            warehouse_id:'',
            item_name:'',
            description:'',
            category:'',
            status:'',
            quantity:'',
          
          });
        //   console.log('formvalues:', formValues);
    
     function handleInputChange(event){
       const {name, value} = event.target;
       setFormValues((prevData) =>({
           ...prevData,
           [name]: value,
       }));
     };

    function handleCancel(e){
        e.preventDefault();
        navigate('/inventorydetails');
  
    }

    
    
    //  async function AddInventoryItem(newInventory) {
    //     try{
    //         const response = await axios.post('http://localhost:8080/inventories/', newInventory);
    //      //    console.log(response.data);
    //         setInventories((inventories) => [response.data, ...inventories]);
    //     } catch (error){
    //         console.error('Error Adding new inventory:', error)
    //     }
        
    //  } 
    
     const handleFormSubmit = async (e) => {
        e.preventDefault();

        if ( item_name === '' || description === ''){
              alert('Please fill all input fields')
              return;
                }
        try{
            const response = await axios.post('http://localhost:8080/inventories/', formValues);
            setInventories((inventories) => [response.data, ...inventories]);
            navigate('/inventory');
        } catch (error){
            console.error('Error Adding new inventory:', error)
        }

     }
    // function handleFormSubmit({ item_name, description}){

    //     if ( item_name === '' || description === ''){
    //         alert('Please fill all input fields')
    //         return;
    //     }
    //     const newInventory = formValues;
    //     AddInventoryItem(newInventory);
    //     // event.preventDefault();
    //     // handleFormSave(formValues);
    // }

    /////get inventories
    useEffect(() =>{
        async function getinventories() {
          try{
            const response = await axios.get('http://localhost:8080/inventories/');
            setInventories(response.data);
          } catch (error){
            console.error('error getting inventory Item:', error)
          }
          
        }
        getinventories();
  
      }, []);

     /////get warehouses
      useEffect(() =>{
        async function getwarehouses() {
          try{
            const response = await axios.get('http://localhost:8080/warehouses/');
            setWarehouses(response.data);
          } catch (error){
            console.error('error getting warehouses:', error)
          }
          
        }
        getwarehouses();
  
      }, []);

      ////// Add new Inventory



    return(
        <section className='itemDetails'>

        <div className='itemDetails__container'>
           <article className='itemDetails__wrap'>
              <img src={arrowBack} alt='back arrow' className='itemDetails__icon' />
              <h1 className='wh-edit__header-text'>Add New Inventory Item</h1>
           </article> 

           <div className='itemDetails__box'>
           
            <form  onSubmit={ handleFormSubmit} className='itemDetails__form-wrap'>
              <div className='itemDetails__form'>
                   <h2 className='itemDetails__title-h2'>Item Details</h2>
                   <label  className='itemDetails__label-h3' htmlFor="name">Item Name</label>
                   <input  className='itemDetails__input' 
                   onChange={handleInputChange}
                   name='item_name'
                   type="text" 
                   value ={formValues.item_name}
                   placeholder='Item Name'/>
  
                   <label className='itemDetails__label-h3' htmlFor="name">Description</label>
                   <textarea className='itemDetails__text' 
                   onChange={handleInputChange}
                   name="description"  
                   rows={7}
                   value={formValues.description}
                   placeholder='Please enter a brief item description'>
                   
                   </textarea>
                   <label className='itemDetails__label-h3' htmlFor="name">Category</label>

                   <select className="itemAvail__dropdown">
                        {/*category dropdown */}
                       {inventories.map((inventory) => (
                           <option key={inventory.id} value={inventory.id}>
                               {inventory.category}
                           </option>
                       ))}
                 </select>

              </div>

              <hr />

              <div className='itemAvail'>

                  <h2 className='itemDetails__label-h3'>Item Availability</h2>
                   <label className='itemAvail__label-h3' htmlFor=""> Status</label>
                      {/* instock */}
                   <div className='itemAvail__box' >
                      <li  className='itemAvail__list'><input 
                      onClick={handleQuantityClick}  
                      className={`itemAvail__radio ${openQuantity ? 'hover' : ''}`}
                      type="radio"
                      checked={isChecked}
                      />In stock</li>

                      {/* out of stock */}
                      <li className='itemAvail__list'><input 
                      className='itemAvail__radio'
                      type="radio"
                      />Out of stock</li>
        
                    </div>
                  
                  { openQuantity === true ? (<StockQuantity  />) : null} 
                    
                    <div className='itemAvail__frame'>
                      <label className='itemDetails__label-h3' htmlFor="">Warehouse</label>
                       {/*warehouse dropdown */}
                      <select className="itemAvail__dropdown">
                       {warehouses.map((warehouse) => (
                           <option key={warehouse.id} value={warehouse.id}>
                               {warehouse.warehouse_name}
                           </option>
                       ))}
                      </select>
                    </div>
              </div>
  
          </form>
  

          </div>

          <div className='itemDetails__btn-frame'>
            <button  onClick={handleCancel} className='itemDetails__btn-cancel'>Cancel</button>
            <button   className='itemDetails__btn-active'>Add Item</button>
          </div>
          
        </div> 

     </section>
    )
}
export default InventoryAdd;