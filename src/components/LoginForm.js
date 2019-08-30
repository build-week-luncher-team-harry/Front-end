import React, { useState, useEffect } from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Input, Button, Label, Icon, Image} from "semantic-ui-react";








const Login = () => {


  //   const [login, setLogin] = useState([]);
  // console.log(login);


  // useEffect(() => {
  //   if (status) {
  //     setLogin([...login, status]);
  //   }
  // }, [status]);

  return (
     <div className="login-form">
    <Form>
     {/* <div>
    <Image src="images/Luncher.png" size='small' />
    </div> */}

     
        <div>
        <Input type="text" 
        name="firstName" required
        placeholder="First Name"
        />
         {/* {touched.firstname && errors.firstname && (
          <p className="error">{errors.firstname}</p>
        )} */}
</div>

<br></br> 

        <div>
        <Input type="text" 
        name="lastName" required 
        placeholder="Last Name"/>
        {/* {touched.firstname && errors.firstname && (
          <p className="error">{errors.firstname}</p>
        )} */}
      </div>

      <br></br> 

      <div className="email">
         <Input iconPosition='Right' placeholder='Email Address' required>
      <Icon color='green' name='at' />
      <input />
    </Input>
    {/* {touched.firstname && errors.firstname && (
          <p className="error">{errors.firstname}</p>
        )} */}
      </div>
      
      <br></br> 
     <div>
        <Input type="password" 
        name="password1"
        placeholder="Password"
        />
        {/* {touched.firstname && errors.firstname && (
          <p className="error">{errors.firstname}</p>
        )} */}
      </div>
      <br></br> 
      <div>
        <Input type="password"
         name="password2"
         placeholder="Password...again"
         />
         {/* {touched.firstname && errors.firstname && (
          <p className="error">{errors.firstname}</p>
        )} */}
      </div>
    <br>
    </br>
    <div> 
   
  <Button animated='fade'>
      <Button.Content visible>Register</Button.Content>
      <Button.Content hidden> Loading Food </Button.Content>
    </Button>
    
    </div> 

        </Form>
        {/* {login.map(login => (
        <p key={login.id}>{login.firstname}</p>
      ))} */}
        </div>
  )
 }
//  handleSubmit(values, { setStatus, resetForm }) {
//   axios
//     .post("https://reqres.in/api/users", values)
//     .then(res => {
//       console.log("handleSubmit: then: res: ", res);
//       setStatus(res.data);
//       resetForm();
//     })
//     .catch(err => console.error("handleSubmit: catch: err: ", err));
// }
// });
export default Login; 