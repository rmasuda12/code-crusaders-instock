import "./Delete.scss";

function Delete() {
    return (
        <>
        <div className="modal__background">
            <div className="modal__content">
                <div className="modal__header">
                    <img src="src/assets/icons/close-24px.svg"/>
                </div>
                <h1 className="modal__title">Delete LOCATION warehouse?</h1>
                <p className="modal__text p1">Please confirm that you'd like to delete the LOCATION from the list of <br></br>warehouses. You won't be able to undo this action.</p>
                <div className="modal__container">
                    <button className="modal__button modal__button--cancel">Cancel</button>
                    <button className="modal__button modal__button--delete">Delete</button>                    
                </div>
            </div>
        </div>
        </>
    )
}

export default Delete