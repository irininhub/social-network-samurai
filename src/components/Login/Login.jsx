import React from 'react';
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import s from "./../../common/FormsControl/FormsControle.module.css"
import {Input} from "../../common/FormsControl/FormsControl";
import {required} from "../../utils/validators/validators";
import {login, logout} from "../../Redux/auth-reducer";
import {Redirect} from "react-router-dom";



const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder="email"
                       name={'email'}
                       validate={[required]}
                       component={Input}/>
            </div>
            <div>
                <Field placeholder="Passoword"
                       type={'password'}
                       name={'password'}
                       component={Input}/>
            </div>
            <div>
                <Field component={Input}
                       type={'checkbox'}
                       name={'rememberMe'}
                />
            </div>
            {props.error && <div className={s.formError}>
                {props.error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>)
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    };

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return (
        <div className={s.form}>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>)
};

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
});


export default connect(mapStateToProps, {login, logout})(Login);
