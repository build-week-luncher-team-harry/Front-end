import React from 'react';
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import './AddSchool.css'
import axios from 'axios';

const AddSchool = ({ errors, touched }) => {
    return (
        <div className='addSchool'>
            <h1>Add a School</h1>
            <Form className='school-form'>
                <div>
                    <Field className='field' type='text' name='schoolName' placeholder='School Name...' />
                </div>
                {touched.schoolName && errors.schoolName && <p>{errors.schoolName}</p>}
                <div>
                    <Field component='select' className='field' name='state'>
                        <option value='select'>Select</option>
                        <option value='AL'>Alabama</option>
                        <option value='AK'>Alaska</option>
                        <option value='AZ'>Arizona</option>
                        <option value='AR'>Arkansas</option>
                        <option value='CA'>California</option>
                        <option value='CO'>Colorado</option>
                        <option value='CT'>Conneticut</option>
                        <option value='DE'>Delaware</option>
                        <option value='FL'>Florida</option>
                        <option value='GA'>Georgia</option>
                        <option value='HI'>Hawaii</option>
                        <option value='ID'>Idaho</option>
                        <option value='IL'>Illinois</option>
                        <option value='IN'>Indiana</option>
                        <option value='IA'>Iowa</option>
                        <option value='KS'>Kansas</option>
                        <option value='KY'>Kentucky</option>
                        <option value='LA'>Louisiana</option>
                        <option value='ME'>Maine</option>
                        <option value='MD'>Maryland</option>
                        <option value='MA'>Massachusetts</option>
                        <option value='MI'>Michigan</option>
                        <option value='MN'>Minnesota</option>
                        <option value='MS'>Mississippi</option>
                        <option value='MO'>Missouri</option>
                        <option value='MT'>Montana</option>
                        <option value='NE'>Nebraska</option>
                        <option value='NV'>Nevada</option>
                        <option value='NH'>New Hampshire</option>
                        <option value='NJ'>New Jersey</option>
                        <option value='NM'>New Mexico</option>
                        <option value='NY'>New York</option>
                        <option value='NC'>North Carolina</option>
                        <option value='ND'>North Dakota</option>
                        <option value='OH'>Ohio</option>
                        <option value='OK'>Oklahoma</option>
                        <option value='OR'>Oregon</option>
                        <option value='PA'>Pennsylvania</option>
                        <option value='RI'>Rhode Island</option>
                        <option value='SC'>South Carolina</option>
                        <option value='SD'>South Dakota</option>
                        <option value='TN'>Tennessee</option>
                        <option value='TX'>Texas</option>
                        <option value='UT'>Utah</option>
                        <option value='VT'>Vermont</option>
                        <option value='VA'>Virginia</option>
                        <option value='WA'>Washington</option>
                        <option value='WV'>West Virginia</option>
                        <option value='WI'>Wisconsin</option>
                        <option value='WY'>Wyoming</option>
                    </Field>
                </div>
                {touched.state && errors.state && <p>{errors.state}</p>}
                <div>
                    <Field className='field' type='text' name='zip' placeholder='Zip...' />
                </div>
                {touched.zip && errors.zip && <p>{errors.zip}</p>}
                <div>
                    <Field className='field' type='text' name='fundsNeeded' placeholder='Funds Needed?' />
                </div>
                {touched.fundsNeeded && errors.fundsNeeded && <p>{errors.fundsNeeded}</p>}
                <div>
                    <button type='submit'>Submit!</button>
                </div>
            </Form>
        </div>
    );
}

const FormikAddSchoolForm = withFormik({
    mapPropsToValues({ schoolName, state, zip, fundsNeeded }) {
        return {
            schoolName: schoolName || "",
            state: state || "",
            zip: zip || "",
            fundsNeeded: fundsNeeded || ""
        };
    },

    validationSchema: Yup.object().shape({
        schoolName: Yup.string()
            .required('*School Name is Required'),
        state: Yup.string()
            .max(2)
            .required('*State is Required'),
        zip: Yup.string()
            .min(5)
            .required('*Zip Code is Required'),
        fundsNeeded: Yup.string()
            .required('*Funds is Required')
    }),

    handleSubmit(values) {
        axios.post('https://luncher-backend.herokuapp.com/api/admin/school', values, {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        })
            .then(res => {
                console.log(res)
            })
    }
})(AddSchool)

export default FormikAddSchoolForm;