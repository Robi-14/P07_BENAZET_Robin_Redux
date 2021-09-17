import React from 'react'
import {BrowserRouter as Router, Route, Switch}from 'react-router-dom'
import Profil from '../../pages/Profil/Profil'
import Home from '../../pages/Home/Home';
import Navbar from '../../components/Header/Navbar/Navbar'
import { Redirect } from 'react-router-dom'


export default function Index() {
    
    return (
        <Router>
            <Navbar/>
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/profil' exact component={Profil}/>
                <Redirect to="/"/> 
            </Switch>
        </Router>
    ) 
}
/*uid Route path='/' exact component=/:  Redirect to="/profil" / */