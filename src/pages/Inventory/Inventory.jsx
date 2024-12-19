import "./Inventory.scss";
import DeleteInventory from "../../components/DeleteInventory/DeleteInventory.jsx";
import { useState } from "react";

function Inventory(){

    const [isModalOpen, setIsModalOpen] = useState(true)
    return(
       <>
            {isModalOpen? <DeleteInventory setIsModalOpen={setIsModalOpen}/> : ""}
       </>
    )
}
export default Inventory;

