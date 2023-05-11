import styles from './NavBar.module.css'
function NavBar() {
    const logoImg= "https://archives.bulbagarden.net/media/upload/4/4b/Pok%C3%A9dex_logo.png"
    return (
        <div>
            <nav>
                <img 
                    alt ="poke-api-logo"
                    src = {logoImg}
                    className={styles.navImg}>
                    
                </img>
            </nav>
        </div>
    )
}
export default NavBar;