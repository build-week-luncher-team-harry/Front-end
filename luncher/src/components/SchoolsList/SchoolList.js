import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SchoolCard from '../SchoolCard/SchoolCard';
import '../SchoolsList/SchoolsList.css';

const SchoolsList = () => {
    const [schools, setSchools] = useState([]);

    useEffect(() => {
        axios.get('https://luncher-backend.herokuapp.com/api/schools')
            .then (res => {
                setSchools(res.data)
            })
            .catch()
    }, []);

    return (
        <div className='schools-list'>
            <h1 className='schools-header'>Schools in Need</h1>
            {schools.map(school => <SchoolCard school={school} key={school.id}/>)}
            <div className='jupa'></div>
        </div>
    )
}

export default SchoolsList;