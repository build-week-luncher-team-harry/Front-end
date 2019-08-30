import React from 'react';
import '../SchoolCard/SchoolCard.css';


const SchoolCard = (props) => {
    const school = props.school;
    return (
        <div className='school-card'>
            <img src='https://www.spokaneschools.org/cms/lib/WA50000187/Centricity/Domain/681/chase%20school%20pic.jpg'/>
            <h3>{school.schoolName}</h3>
            <p>{school.state}, {school.zip}</p>
            <p>Funds Needed: ${school.fundsNeeded}</p>
            <p>Contact: {school.contact}</p>
        </div>
    )
}

export default SchoolCard;