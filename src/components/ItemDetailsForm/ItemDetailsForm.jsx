import './ItemDetailsForm.scss';



function ItemDetailsForm(){

    return(
        
    <div className='itemDetails__box'>
       
      <h2 className='itemDetails__title-h2'>Item Details</h2>

      <form className='itemDetails__form'>

        <label  className='itemDetails__label-h3' htmlFor="name">Item Name</label>

        <input  className='itemDetails__input' type="text" />

        <label className='itemDetails__label-h3' htmlFor="name">Description</label>

        <textarea className='itemDetails__text' name="" id="" rows={7}>

        </textarea>

        <label className='itemDetails__label-h3' htmlFor="name">Category</label>

        <div  className='itemDetails__dropdown'>

            <p>Electronics</p>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 10L12 15L17 10H7Z" fill="#5C667E"/>
            </svg>

                   
        </div>

      </form>

      </div>
    )
}
export default ItemDetailsForm;