import { login } from "../../services/login";
import { useState } from "react";
import { UserContext } from "../../context/UserContext";
import { useContext } from "react";



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
        <section id="register-page" className="content auth">
        <form id="register" onSubmit={onSubmitHandler}>
            <div className="container">
                <div className="brand-logo"></div>
                <h1>Register</h1>

                <label htmlFor="username">Username:</label>
                <input type="username" id="username" name="username" onChange={(e)=> onFormFieldChange('username' , e.target.value)}/>

                <label htmlFor="pass">Password:</label>
                <input type="password" name="password" id="register-password" onChange={(e)=> onFormFieldChange('password' , e.target.value)}/>


                <button className="btn submit" type="submit">Login</button>

                <p className="field">
                    <span>If you already have profile click <a href="/login">here</a></span>
                </p>
            </div>
        </form>
    </section>
    )
}