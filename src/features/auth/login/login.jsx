import { Link } from 'react-router-dom';
import styles from './login.module.css'
function login() {


    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.hero}>
                    <p className={styles.quote}>Lorem, ipsum dolor</p>

                    <div>
                        <h1 className={styles.title_text}>Lorem ipsum dolor sit.</h1>
                        <p className={styles.subtitle_text}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere dolor a eos.</p>
                    </div>
                </div>
                <div className={styles.form_section}>
                    <div className={styles.logo}>Token Gen</div>

                    <form  className={styles.form_data}>
                        <div className={styles.greeting}> 
                            <h1>Welcome Back</h1>
                            <p>Enter your email and password to access your account</p>
                        </div>

                        <div>

                            <div className={styles.inputs}>
                                <label htmlFor="text">Email</label>
                                <input type="text" placeholder='Enter your email' />
                            </div>

                            <div className={styles.inputs}>
                                <label htmlFor="text">Password</label>
                                <input type="password" placeholder='Enter your password'/>
                            </div>

                            <div className={styles.buttons}>
                                <button>Sign In</button>
                            </div>



                        </div>



                    </form>

                    <div>
                        <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
                    </div>

                </div>
            </div>
        </>
    )
}

export default login
