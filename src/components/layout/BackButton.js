import styles from './BackButton.module.css'

function BackButton(){
    function back(){ 
        <a  href={window.history.back(-1)}></a>}
    return(
        
        <button className={styles.BackButton} onClick={back}>Voltar</button>

    )
}
export default BackButton