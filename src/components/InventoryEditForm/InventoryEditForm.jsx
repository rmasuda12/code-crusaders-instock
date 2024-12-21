import './InventoryEditForm.scss'
import { useState,useEffect } from 'react';
import axios from 'axios';
import { useParams} from 'react-router-dom';
import StockQuantity from '../StockQuantity/StockQuantity.jsx';



function InventoryEditForm({handleFormSave}){
      const [openQuantity, setOpenQuantity] = useState(false);
      const [isChecked, setIsChecked] = useState(false);
      const [inventories, setInventories] = useState([]);
      const [warehouses, setWarehouses] = useState([]);
      const params = useParams();
       console.log('Params:', params);
      

      const [formValues, setFormValues] = useState({
        warehouse_id:'',
        item_name:'',
        description:'',
        category:'',
        status:'',
        quantity:'',
      
      });
      console.log('formvalues:', formValues);

      function handleInputChange(event){
        const {name, value} = event.target;
        setFormValues((prevData) =>({
            ...prevData,
            [name]: value,
        }));
      };
 
      /////get inventories
          useEffect(() =>{
            async function getinventories() {
              try{
                const response = await axios.get('http://localhost:8080/inventories/');
                console.log(response.data);
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
                console.log(response.data);
                setWarehouses(response.data);
              } catch (error){
                console.error('error getting warehouses:', error)
              }
              
            }
            getwarehouses();
      
          }, []);

           /////get InventoryItem

          useEffect(() => {
            async function getInventoryItemData() {
              try {
                const response = await axios.get(
                  `http://localhost:8080/inventories/${params.id}`
                );
                console.log("response:", response.data);
                setFormValues(response.data);
              } catch (error) {
                console.log(error);
              }
            }
            getInventoryItemData();
          }, [params.id]);


      function handleQuantityClick (){
        setOpenQuantity(!openQuantity);
        setIsChecked(!isChecked);
        
      }
     
      function onSubmit(event){
        event.preventDefault();
        handleFormSave(formValues);
    }


    return(
        <>

        <div className='itemDetails__box'>
       
        
           <form  onSubmit={ onSubmit} className='itemDetails__form-wrap'>
               {/* <div></div> */}
              <div className='itemDetails__form'>
                   <h2 className='itemDetails__title-h2'>Item Details</h2>
  
                   <label  className='itemDetails__label-h3' htmlFor="name">Item Name</label>
                   <input  className='itemDetails__input' 
                   onChange={handleInputChange}
                   name='name'
                   type="text" 
                   value ={formValues. item_name}/>
  
                   <label className='itemDetails__label-h3' htmlFor="name">Description</label>
                   <textarea className='itemDetails__text' 
                   onChange={handleInputChange}
                   name="description"  
                   rows={7}
                   value={formValues.description}>
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

        

        </>

    )
}
export default InventoryEditForm;