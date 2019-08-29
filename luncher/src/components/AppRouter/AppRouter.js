import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Admin from '../Admin/Admin';
import SchoolList from '../SchoolsList/SchoolList';
import FormikAddSchoolForm from '../AddSchool/AddSchool';
import FormikSignUpForm from '../SignUp/SignUp';
// import TestComp from '../TestComponent/TestComp';

const AppRouter = () => {
    return (
        <Switch>
            <Route exact path='/' component={FormikSignUpForm} />
            <Route exact path='/donate' component={SchoolList} />
            <Route exact path='/admin' component={Admin} />
            <Route path='/admin/add-school' component={FormikAddSchoolForm} />
        </Switch>
        ) 
}

export default AppRouter;