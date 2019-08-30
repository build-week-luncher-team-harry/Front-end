import React from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
import { Input, Button, Label, Icon, Image, Container} from "semantic-ui-react";








const SignUp = () => {
    
    return(
        <Container>
        <div class="ui placeholder segment">
  <div class="ui two column very relaxed stackable grid">
    <div class="column">
      <div class="ui form">
        <div class="field">
          <label>Username</label>
          <div class="ui left icon input">
          <Input type="text" 
        name="Username" required
        placeholder="Username"
        />
            <Input type="text" placeholder="Username">
            <i class="user icon"></i>
            </Input>
          </div>
        </div>
        <div class="field">
          <label>Password</label>
          <div class="ui left icon input">
          <Input type="text" 
        name="password" required
        placeholder="********"
        />
            <Input type="password">
            <i class="lock icon"></i>
            </Input>
          </div>
        </div>
        <div class="ui blue submit button">Login</div>
      </div>
    </div>
    <div class="middle aligned column">
      <div class="ui big button">
        <i class="signup icon"></i>
        Sign Up
      </div>
    </div>
  </div>
  <div class="ui vertical divider">
    Or
  </div>
</div>
</Container>

    )
}
export default SignUp;