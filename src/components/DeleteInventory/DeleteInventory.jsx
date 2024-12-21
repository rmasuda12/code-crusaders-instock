import "./DeleteInventory.scss"
import axios from "axios";


function DeleteInventory(prop) {
    const baseURL = import.meta.env.VITE_API_URL;

    function closeModal() {
        prop.setIsModalOpen(false);
    }

    async function deleteInventory() {
        try {
            const deleted = await axios.delete(`${baseURL}/inventories/${prop.inventoryInfo.id}`);
            prop.setIsModalOpen(false);        
        } catch (error) {
            console.log("error: inventory item could not be deleted")
        }

    }
    return (
        <>
        <div className="modal__background">
            <div className="modal__content">
                <div className="modal__header">
                    <img className="modal__closer" src={`${baseURL}/close-24px.svg`} onClick={closeModal}/>
                </div>
                <h1 className="modal__title">Delete {prop.inventoryInfo.item_name} inventory item?</h1>
                <p className="modal__text p1">Please confirm that you'd like to delete {prop.inventoryInfo.item_name} from the inventory list. You won't be able to undo this action.</p>
                <div className="modal__container">
                    <button className="modal__button modal__button--cancel" onClick={closeModal}>Cancel</button>
                    <button className="modal__button modal__button--delete" onClick={deleteInventory}>Delete</button>                    
                </div>
            </div>
        </div>
        </>
    )
}

export default DeleteInventory