import './InventoryEditForm.scss'
import { useState,useEffect } from 'react';
import axios from 'axios';
import { useParams ,useNavigate} from 'react-router-dom';


function InventoryEditForm(){
      const [openQuantity, setOpenQuantity] = useState(false);
      const [isChecked, setIsChecked] = useState(false);
      const [inventories, setInventories] = useState([]);
      const [warehouses, setWarehouses] = useState([]);
      const navigate = useNavigate();
      const params = useParams();

      const [formValues, setFormValues] = useState({
        warehouse_name:'',
        item_name:'',
        description:'',
        category:'',
        status:'',
        quantity:'',
      
      });
      
      function handleCancel(e){
         e.preventDefault();
         navigate('/inventories');
      
        }

      function handleQuantityClick (){
        setOpenQuantity(!openQuantity);
        setIsChecked(!isChecked);
        
       
      }

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
                console.error('error getting inventory item:',error);
              }
            }
            getInventoryItemData();
          }, [params.id]);


      function handleQuantityClick (){
        setOpenQuantity(!openQuantity);
        setIsChecked(!isChecked);
        
      }
      const onSubmit = async (event) => {
         event.preventDefault();

         console.log('Submitting form:',formValues);

         function validateForm(formValues) {
           let isFormValid = true;

           for (let key in formValues) {
             const fieldValue = formValues[key];
             if (fieldValue === ''){
              isFormValid = false;
              break;
             }
           }
            ///validate in stock radio
           if (formValues.status === "In Stock" && (!formValues.quantity || formValues.quantity === "")) {
            alert("Please enter a quantity for items in stock.");
            return false;
          }
           if (!isFormValid){
            alert('Please fill all input field');
           }
           return isFormValid;
         }
         const isFormValid = validateForm(formValues)
          if(!isFormValid){
            return;
          }
          const { updated_at, created_at, warehouse_name, ...dataToSend } = formValues;
          console.log('this is new data:',dataToSend);
          console.log('this is form values:', formValues);
          
          try{
            const response = await axios.put(
              `http://localhost:8080/inventories/${params.id}`,dataToSend
            );
            console.log('Inventory updated successfully:', response)
          } catch (error){
            console.log(error);
            alert('Error unpdating Inventory');
          }
      };
      



    return(
        <>

        
           <form  onSubmit={ onSubmit} className='itemDetails__box'>
             <div className='itemDetails__form-wrap'>
       
              <div className='itemDetails__form'>
                   <h2 className='itemDetails__title-h2'>Item Details</h2>
  
                   <label  className='itemDetails__label-h3' htmlFor="name">Item Name</label>
                   <input  className='itemDetails__input' 
                   onChange={handleInputChange}
                   name='item_name'
                   type="text" 
                   value ={formValues.item_name}/>
  
                   <label className='itemDetails__label-h3' htmlFor="name">Description</label>
                   <textarea className='itemDetails__text' 
                   onChange={handleInputChange}
                   name="description"  
                   rows={7}
                   value={formValues.description}>
                   </textarea>
                   <label className='itemDetails__label-h3' htmlFor="name">Category</label>

                   <select className="itemAvail__dropdown"
                         value={formValues.category}
                         onChange={(e) =>
                           setFormValues((prevData) => ({
                             ...prevData,
                             category: e.target.value,
                           }))
                         }>
                            <option value="" disabled>
                            {formValues.category}
                           </option>
                       {/*category dropdown */}
                       {inventories.map((inventory) => (
                           <option key={inventory.id} value={inventory.category}>
                               {inventory.category}
                           </option>
                       ))}
                 </select>

              </div>

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
                      value ="In Stock"
                      onChange={(e) => {
                        setFormValues((prevData) => ({
                          ...prevData,
                          status: e.target.value, 
                        }));
                        setOpenQuantity(true); 
                      }}
                      />In stock</li>

                      {/* out of stock */}
                      <li className='itemAvail__list'><input 
                      className='itemAvail__radio'
                      type="radio"
                      />Out of stock</li>
        
                    </div>
                  
                    { openQuantity === true ? (
                     <div className='itemAvail__quantity'>
                         <label className='itemDetails__label-h3' htmlFor="">Quantity</label>
                         <input  className='itemDetails__input' 
                           name='quantity'
                           type="number" 
                           min='0'
                           value={formValues.quantity}
                           onChange={(e) =>
                            setFormValues((prevData) => ({
                              ...prevData,
                              quantity: e.target.value,
                            }))
                          }
                           />
                      </div> ) : null} 
                    
                    
                    <div className='itemAvail__frame'>
                      <label className='itemDetails__label-h3' htmlFor="">Warehouse</label>
                       {/*warehouse dropdown */}
                       <select className="itemAvail__dropdown" value={formValues.warehouse_id}
                        onChange={(e) =>
                          setFormValues((prevData) => ({
                            ...prevData,
                            warehouse_id: e.target.value,
                          }))
                        }>
                            <option value="" disabled>
                            {formValues.warehouse_name}
                           </option>
                       {warehouses.map((warehouse) => (
                           <option key={warehouse.id} value={warehouse.id}>
                               {warehouse.warehouse_name}
                           </option>
                       ))}
                      </select>
                    </div>
              </div>
              </div>

              <div className='itemDetails__btn-frame'>
             <button  onClick={handleCancel} className='itemDetails__btn-cancel'>Cancel</button>
             <button  className='itemDetails__btn-active'>Save</button>
           </div>
          </form>
  
      

        

        </>

    )
}
export default InventoryEditForm;