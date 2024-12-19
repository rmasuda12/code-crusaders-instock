import './ItemAvailability.scss';

function ItemAvailability(){

    return(

       <div className='itemAvail'>

           <h2 className='itemDetails__label-h3'>Item Availability</h2>
            
           <label className='itemAvail__label-h3' htmlFor=""> Status</label>

            <div className='itemAvail__box' >

               
                <label  htmlFor=""><input className='itemAvail__radio' type="radio"/>In stock</label>
                <label htmlFor=""><input className='itemAvail__radio-active' type="radio"/>Out stock</label>

            </div>

            <div className='itemAvail__frame'>

                <label className='itemDetails__label-h3' htmlFor="">Warehouse</label>

                <div  className='itemAvail__dropdown'>
                    <p>Manhattan</p>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 10L12 15L17 10H7Z" fill="#5C667E"/>
                    </svg>

                   
                </div>

            </div>

       
       </div>
    )
}
export default  ItemAvailability;