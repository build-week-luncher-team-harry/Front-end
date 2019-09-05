import React, { useEffect, useState } from 'react';
import './Admin.css';
import axios from 'axios';

export default function Admin() {
    const [school, setSchool] = useState([]);

    useEffect(() => {
        axios.get(`https://luncher-backend.herokuapp.com/api/admin/school`, {
            headers: {
                Authorization: localStorage.getItem('token')
                }
            })
            .then(res => {
                console.log(res)
                setSchool(res.data)
            })
            .catch()
    }, []);


    return (
        <div className='admin'>
            <div className='schoolInfo'>
                <h1 className='schoolName'>{school.schoolName}</h1>
                <h3>State: {school.state}, {school.zip}</h3>
                <h3>Funds Needed: ${school.fundsNeeded}</h3>
                <button>Delete School</button>
            </div>
        </div>
    )
}