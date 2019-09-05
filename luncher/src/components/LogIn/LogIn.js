import React from 'react';
import { withFormik, Form, Field } from "formik";
import { Link } from 'react-router-dom';
import * as Yup from "yup";
import axios from 'axios';

const LogIn = ({ errors, touched }) => {
    return (
        <div className='addSchool'>
            <h1>LUNCHER SIGN-IN</h1>
            <Form className='school-form'>
                <div>
                    <Field className='field' type='email' name='email' placeholder='E-Mail' />
                    {touched.email && errors.email && <p>{errors.email}</p>}
                </div>
                <div>
                    <Field className='field' type='password' name='password' placeholder='Password' />
                    {touched.password && errors.password && <p>{errors.password}</p>}
                </div>
                <div>
                    <button type='submit'>Log In</button>
                </div>
                <p>Don't Have an Account?</p>
                <Link to='/'>SIGN-UP</Link>
            </Form>
        </div>
    );
}

const FormikLogInForm = withFormik({
    mapPropsToValues({ email, password }) {
        return {
            email: email || "",
            password: password || "",
        };
    },

    validationSchema: Yup.object().shape({
        email: Yup.string()
            .required('*Email is Required'),
        password: Yup.string()
            .min(5)
            .required('*Password is Required')
    }),

    handleSubmit(user) {
        axios.post('https://luncher-backend.herokuapp.com/api/login', {...user})
            .then(res => {
                console.log(res)
                localStorage.setItem('token', res.data.token)
                localStorage.setItem('adminId', res.data.id)
            })
    }
})(LogIn)

export default FormikLogInForm;