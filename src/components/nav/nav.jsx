import { Link } from 'react-router-dom';

import styles from './nav.module.css'
function nav() {
  

    return (
      <>
        <div className={styles.nav}>
         <div className={styles.logo}> TOken gen</div>

          <ul className={styles.links}>
        <li>Home</li>
        <li>About</li>
        <li>Help</li>
          </ul>

          <div className={styles.userinfo}>
          <h1>Lorem Ipsum</h1>
          <button > <Link to="/">
            Log Out</Link>
        </button>
          </div>
        </div>

      </>
    )
  }
  
  export default nav
  