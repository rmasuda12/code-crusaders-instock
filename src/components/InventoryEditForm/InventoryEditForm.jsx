import './InventoryEditForm.scss'
import { useState,useEffect } from 'react';
import axios from 'axios';
import { useParams} from 'react-router-dom';
import StockQuantity from '../StockQuantity/StockQuantity.jsx';


function InventoryEditForm({handleFormSave}){
      const [openQuantity, setOpenQuantity] = useState(false);
      const [isChecked, setIsChecked] = useState(false);
      const [editInventory, setEditInventory] = useState([[]]);
      

      const [formValues, setFormValues] = useState({name:'', description:''});


     
       const params = useParams();
       console.log('Params:', params);

      // 
      /////get inventories
          useEffect(() =>{
            async function getInventory() {
              try{
                const response = await axios.get(`http://localhost:8080/inventories/${params.id}`);
                console.log(response.data);
                setEditInventory(response.data);
              } catch (error){
                console.error('error getting inventory Item:', error)
              }
              
            }
            getInventory();
      
          }, [params.id]);
        

      function handleQuantityClick (){
        setOpenQuantity(!openQuantity);
        setIsChecked(!isChecked);
        
       
      }

      function handleInputChange(event){

        const {name, value} = event.target;

        setFormValues({
            ...formValues,
            [name]: value,
        })
      }

      function onSubmit(event){
        event.preventDefault();
        handleFormSave(formValues);

        setFormValues({name:'', description:''});
    }


    return(
        <>

        <div className='itemDetails__box'>
       
         <h2 className='itemDetails__title-h2'>Item Details</h2>
  
           <form  onSubmit={ onSubmit} className='itemDetails__form-wrap'>
             

              <div className='itemDetails__form'>
                   <label  className='itemDetails__label-h3' htmlFor="name">Item Name</label>
                   <input  className='itemDetails__input' 
                   onChange={handleInputChange}
                   name='name'
                   type="text" 
                   value ={formValues.name}/>
  
                   <label className='itemDetails__label-h3' htmlFor="name">Description</label>
                   <textarea className='itemDetails__text' 
                   onChange={handleInputChange}
                   name="description"  
                   rows={7}
                   value={formValues.description}>
                   </textarea>
                   <label className='itemDetails__label-h3' htmlFor="name">Category</label>
                   <div  className='itemDetails__dropdown'>
                       <p>Electronics</p>
                       <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                       <path d="M7 10L12 15L17 10H7Z" fill="#5C667E"/>
                       </svg>      
                   </div>
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
                     
                          
                          <select className='itemAvail__dropdown'>
                              <option value="1">Manhattan</option>
                              <option value="2">Washington</option>
                              <option value="3">Jersey</option>
                              <option value="4">SF</option>
                              <option value="5">Santa Monica</option>
                              <option value="6">Seattle</option>
                              <option value="7">Miami</option>
                              <option value="8">Boston</option>
                          </select>
                             {/* <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M7 10L12 15L17 10H7Z" fill="#5C667E"/>
                             </svg> */}
                         
                      
   
                    </div>
              </div>
  
          </form>
  
        </div>

        

        </>

    )
}
export default InventoryEditForm;