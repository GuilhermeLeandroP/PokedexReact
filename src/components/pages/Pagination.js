import { FiArrowLeft,FiArrowRight } from "react-icons/fi";
import styles from "./Pagination.module.css"

function Pagination(props){
    const {page,totalPages, onLeftClick, onRightClick}=props
    return(
        <div className={styles.buttons}>
            <button className={styles.leftright} onClick={onLeftClick}><FiArrowLeft/>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            </button>
            <div className={styles.button}>{page} de {totalPages}</div>
            <button className={styles.leftright} onClick={onRightClick}><FiArrowRight/></button>
        </div>
    )
}
export default Pagination;
