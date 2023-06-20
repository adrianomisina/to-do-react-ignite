import styles from './Header.module.css'
import '../../global.css'
import Logo from '../../assets/Logo.png'

const Header = () => {
  return (
    <header className={styles.header}>
      <div>
        <img src={Logo} alt="Logo To do List" />
      </div>
    </header>
  )
}

export default Header