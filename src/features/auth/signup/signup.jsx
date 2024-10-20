
import styles from './signup.module.css'
function signup() {


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

                    <form className={styles.form_data}>
                        <div className={styles.greeting}>
                            <h1>Register User</h1>
                            <p>Enter following details to register your account</p>
                        </div>

                        <div>

                            <div className={styles.inputs}>
                                <label htmlFor="text">Email</label>
                                <input type="text" placeholder='Enter your email' />
                            </div>

                            <div className={styles.inputs}>
                                <label htmlFor="text">Password</label>
                                <input type="password" placeholder='Enter your password' />
                            </div>

                            <div className={styles.inputs}>
                                <label htmlFor="department">Department</label>
                                <select id="department" name="department">
                                    <option value="">Select your department</option>
                                    <option value="operations">Operations</option>
                                    <option value="finance">Finance</option>
                                    <option value="technical">Technical</option>
                                    <option value="support">Support</option>
                                    <option value="support">Other</option>
                                </select>
                            </div>

                            <div className={styles.inputs}>
                                <label htmlFor="department">Designation</label>
                                <select id="department" name="department">
                                    <option value="">Select your Designation</option>
                                    <option value="operations">Staff</option>
                                    <option value="finance">Admin</option>
                                    <option value="finance">Lead</option>
                                    <option value="finance">Developer</option>
                                    <option value="technical">Manager</option>
                                    <option value="support">Intern</option>
                                    <option value="support">Assistant</option>
                                </select>
                            </div>

                            <div className={styles.buttons}>
                                <button>Sign Up</button>
                            </div>



                        </div>



                    </form>



                </div>
            </div>
        </>
    )
}

export default signup
