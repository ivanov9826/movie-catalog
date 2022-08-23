import { login } from "../../services/login";
import { useState } from "react";
import { UserContext } from "../../context/UserContext";
import { useContext } from "react";
import styles from "./Login.module.css"



export const Login = () => {

    const { setUser } = useContext(UserContext);

    const [formValues , setFormValues] = useState({
        username: '',
        password: ''
    });

    const onFormFieldChange = (name , value) => {
        setFormValues(state => {

            return {
                ...state,
                [name]: value
            }
        })
    };

    const onSubmitHandler = async (e) => {

        e.preventDefault();


        const user = await login(formValues.username , formValues.password);
        console.log(user);
        if(user.username){
            setUser({
                username: user.username ,
                id: user._id
            })
        }
    }

    return (
        <section id="login-page" className={styles.loginPage}>
        <form id="login" onSubmit={onSubmitHandler}>
            <div>
                
                <h1>Login</h1>

                <label htmlFor="username">Username:</label>
                <input type="username" id="username" name="username" onChange={(e)=> onFormFieldChange('username' , e.target.value)}/>

                <label htmlFor="pass">Password:</label>
                <input type="password" name="password" id="register-password" onChange={(e)=> onFormFieldChange('password' , e.target.value)}/>


                <button className="btn submit" type="submit">Login</button>

                <p>
                    <span>If you don't have a profile click <a href="/login">here</a></span>
                </p>
            </div>
        </form>
    </section>
    )
}