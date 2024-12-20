import './StockQuantity.scss';

function StockQuantity(){
    return(
        <div className='itemAvail__quantity'>
        <label className='itemDetails__label-h3' htmlFor="">Quantity</label>
        <input  className='itemDetails__input' 
          name='quantity'
          type="number" 
          />
     </div>
    )
}
export default StockQuantity;