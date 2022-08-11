import { useState } from "react";
import { register } from "../../services/register";

export const Register = () => {
    const [formValues , setFormValues] = useState({
        username: '',
        password: '',
        confirmPassword: ''
    });

    const onFormFieldChange = (name , value) => {
        setFormValues(state => {

            return {
                ...state,
                [name]: value
            }
        })
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();
        register(formValues.username , formValues.password)
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

                    <label htmlFor="con-pass">Confirm Password:</label>
                    <input type="password" name="confirmPassword" id="confirmPassword" onChange={(e)=> onFormFieldChange('confrimPassword' , e.target.value)}/>

                    <button className="btn submit" type="submit">Register</button>

                    <p className="field">
                        <span>If you already have profile click <a href="/login">here</a></span>
                    </p>
                </div>
            </form>
        </section>
    );
};