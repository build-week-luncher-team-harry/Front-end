import React from 'react';
import '../SchoolCard/SchoolCard.css';
import {useSpring, animated} from 'react-spring';




const SchoolCard = (props) => {
    console.log(props.school);
    const school = props.school;
    const fadeDiv = useSpring({config: {duration: 3000}, opacity: 1, from: {opacity: 0}});
    return (
       
        <animated.div style={fadeDiv}>
            <div className='school-card'>
                <img src='https://www.spokaneschools.org/cms/lib/WA50000187/Centricity/Domain/681/chase%20school%20pic.jpg'/>
                <h3>{school.schoolName}</h3>
                <p>{school.state}, {school.zip}</p>
                <p>Funds Needed: ${school.fundsNeeded}</p>
                <p>Contact: {school.contact}</p>
            </div>
        </animated.div>
)}
        

export default SchoolCard;



