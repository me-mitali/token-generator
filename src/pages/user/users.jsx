import Nav from "../../components/nav/nav"
import userAvatar from './../../assets/images/user_avatar.png'
import styles from './users.module.css'
import { Link } from 'react-router-dom';

function users() {


  return (
    <>
    <Nav/>
    <div className={styles.hero}>
        <div className={styles.avatar}>
            <img src={userAvatar} alt="" />
            <p>Lorem Ipsum</p>

            <Link to="/generate"> <button className={styles.generate}>
            Generate Token 
        </button></Link>
           
        </div>

       
    </div>
    </>
  )

}

export default users
