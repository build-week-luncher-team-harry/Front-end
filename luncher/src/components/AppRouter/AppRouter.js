import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Admin from '../Admin/Admin';
import SchoolList from '../SchoolsList/SchoolList';
import FormikAddSchoolForm from '../AddSchool/AddSchool';
// import TestComp from '../TestComponent/TestComp';

const AppRouter = () => {
    return (
        <Switch>
            <Route exact path='/donate' component={SchoolList} />
            <Route exact path='/admin' component={Admin} />
            <Route path='/admin/manage' component={FormikAddSchoolForm} />
        </Switch>
        ) 
}

export default AppRouter;