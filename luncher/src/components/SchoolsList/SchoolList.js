import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SchoolCard from '../SchoolCard/SchoolCard';
import '../SchoolsList/SchoolsList.css';

const SchoolsList = () => {
    const [schools, setSchools] = useState([]);

    useEffect(() => {
        axios.get('https://luncher-backend.herokuapp.com/api/schools')
            .then (res => {
                console.log(res)
                setSchools(res.data)
            })
            .catch(console.log(res => {
                console.log(res)
            }))
    }, []);

    return (
        <div className='schools-list'>
            <h1 className='schools-header'>Schools in Need</h1>
            {schools.map(school => <SchoolCard school={school} key={school.id}/>)}
            <div className='spacer'></div>
        </div>
    )
}

export default SchoolsList;