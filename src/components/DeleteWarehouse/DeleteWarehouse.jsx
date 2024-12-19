import "./DeleteWarehouse.scss";
import axios from "axios";

function Delete(prop) {
    function closeModal() {
        prop.setIsModalOpen(false);
    }

    async function deleteWarehouse() {
        try {
            const deleted = await axios.delete(url);
            prop.setIsModalOpen(false);  
        } catch (error) {
            console.log("delete function failed")
        }
    }
    return (
        <>
        <div className="modal__background">
            <div className="modal__content">
                <div className="modal__header">
                    <img className="modal__closer" src="src/assets/icons/close-24px.svg" onClick={closeModal}/>
                </div>
                <h1 className="modal__title">Delete LOCATION warehouse?</h1>
                <p className="modal__text p1">Please confirm that you'd like to delete the LOCATION from the list of warehouses. You won't be able to undo this action.</p>
                <div className="modal__container">
                    <button className="modal__button modal__button--cancel" onClick={closeModal}>Cancel</button>
                    <button className="modal__button modal__button--delete" onClick={deleteWarehouse}>Delete</button>                    
                </div>
            </div>
        </div>
        </>
    )
}

export default Delete