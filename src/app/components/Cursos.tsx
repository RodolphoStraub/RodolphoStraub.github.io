import styles from './Cursos.module.css'

export default function Cursos(){
    return(
        <div id='Cursos' className={styles.all}>
      <h1 className={styles.title}>
        Conheça nossos <span className={styles.title_color}>cursos</span>
      </h1>
      <h2 className={styles.sub_title}>
        E descubra um mundo de possibilidades!
      </h2>
    </div>
    )
}