import "./DeleteWarehouse.scss";
import axios from "axios";
import { useParams } from "react-router-dom";


function Delete(prop) {
    const baseURL = import.meta.env.VITE_API_URL
    const params = useParams();
    function closeModal() {
        prop.setIsModalOpen(false);
    }

    async function deleteWarehouse() {
        try {
            console.log("delete was attempted")
            const deleted = await axios.delete(`${baseURL}/warehouses/${params.id}`);
            console.log("delete api call ran succesffully")
            prop.setIsModalOpen(false);  
            console.log("code is still running after set Is modal open")
        } catch (error) {
            console.log("deleted function failed")
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