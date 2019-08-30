import React from 'react';
import './Admin.css';
import SchoolList from '../SchoolsList/SchoolList';

export default function Admin() {
    return (
        <div className='admin'>
            
            <SchoolList />
        </div>
    )
}