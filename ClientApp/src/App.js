import React, { Component } from 'react';
/*import { Route, Router } from 'react-router';*/
import { Layout } from './components/Layout';
import { HeadLayout } from './components/HeadLayout';
import Home  from './components/HomePage/Home';
import { NavMenu } from './components/HomePage/NavMenu';
/*import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';*/
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './custom.css'
import { UserPage } from './components/UserPage/UserPage';
import CoursesPage from './components/Courses/CoursesPage';
import EventPage from './components/Event/EventPage';
import QuizPage from './components/Quiz/QuizPage';
import Signup from './components/AuthPage/Signup';
import Login from './components/AuthPage/Login';
function App() {
    return (
        <Router>
            <div className="app">
                <Switch>
                    <Router exact path="/">
                        <Layout>
                            <Route exact path='/' component={Home}/>
                            <Route path='/auth/signup' component={Signup} />
                            <Route path='/auth/login' component={Login} />
                        </Layout>
                     
                    </Router>
                    <Router path="/auth">
                      
                    </Router>
                <Router path="/userpage">
                        <HeadLayout>
                            <Route exact path='/userpage' component={UserPage} />
                            <Route path='/userpage/course' component={CoursesPage} />
                            <Route path='/userpage/event' component={EventPage} />
                            <Route path='/userpage/quiz' component={ QuizPage} />
                        </HeadLayout>
                  
                    </Router>
                    {/* <Router path="/courses">
                        <HeadLayout>
                            <Route path='/course' component={CoursesPage} />
                            <Route path='/event' component={EventPage} />
                            <Route path='/quiz' component={QuizPage} />
                        </HeadLayout>
                        <CoursesPage />
                    </Router>*/}
                </Switch>
            </div>
        </Router>
    )
}

export default App;