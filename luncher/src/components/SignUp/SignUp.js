import React from 'react';
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import './SignUp.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

const SignUp = ({ errors, touched }) => {
    return (
        <div className='addSchool'>
            <h1>LUNCHER SIGN-UP</h1>
            <Form className='school-form'>
                <div>
                    <Field className='field name' type='text' name='firstName' placeholder='First Name...' />
                    {touched.firstName && errors.firstName && <p>{errors.firstName}</p>}
                    <Field className='field name' type='text' name='lastName' placeholder='Last Name...' />
                    {touched.lastName && errors.lastName && <p>{errors.lastName}</p>}
                </div>
                <div>
                    <Field className='field' type='email' name='email' placeholder='email@domain.com' />
                    {touched.email && errors.email && <p>{errors.email}</p>}
                </div>
                <div>
                    <Field className='field' type='password' name='password' placeholder='Password' />
                    {touched.password && errors.password && <p>{errors.password}</p>}
                </div>
                <div>
                    <Field component='select' className='field' name='role' >
                        <option value=''>Select Role</option>
                        <option value='admin'>Admin</option>
                        <option value='donor'>Donor</option>
                    </Field>
                    {touched.role && errors.role && <p>{errors.role}</p>}
                </div>
                <div>
                    <button type='submit'>Submit!</button>
                </div>
                <p>Already Have an Account?</p>
                <Link to='/login'>SIGN-IN</Link>
            </Form>
        </div>
    );
}

const FormikSignUpForm = withFormik({
    mapPropsToValues({ firstName, lastName, email, password, role }) {
        return {
            firstName: firstName || "",
            lastName: lastName || "",
            email: email || "",
            password: password || "",
            role: role || ""
        };
    },

    validationSchema: Yup.object().shape({
        firstName: Yup.string()
            .required('*First Name is Required'),
        lastName: Yup.string()
            .required('*Last Name is Required'),
        email: Yup.string()
            .required('*Email is Required'),
        password: Yup.string()
            .min(5)
            .required('*Password is Required'),
        role: Yup.string()
            .min(1)
            .required('*Role is Required')
    }),

    handleSubmit(user) {
        axios.post('https://luncher-backend.herokuapp.com/api/register', {...user})
            .then(res => {
                console.log(res)
            })
    }
})(SignUp)

export default FormikSignUpForm;