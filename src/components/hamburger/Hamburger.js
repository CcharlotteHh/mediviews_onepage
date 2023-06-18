import styles from "./hamburger.module.scss"
function Hamburger(){

    return(
        <div className={styles.hamburger}>
            <div className={styles.burger}/>
            <div className={styles.burger}/>
            <div className={styles.burger} />
        </div>
    )
}

export default Hamburger;