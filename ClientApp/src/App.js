import React, { Component } from 'react';
/*import { Route, Router } from 'react-router';*/
import { Layout } from './components/Layout';
import { HeadLayout } from './components/HeadLayout';
import Home  from './components/HomePage/Home';
import { NavMenu } from './components/HomePage/NavMenu';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './custom.css'

import UserPage from './components/UserPage/UserPage';
import CoursesPage  from './components/Courses/CoursesPage';

import EventPage from './components/Event/EventPage';
import { QuizPage } from './components/Quiz/QuizPage';
import Signup from './components/AuthPage/Signup';
import { Login} from './components/AuthPage/Login';
import { ProtectedRoute } from './components/ProtectedRoute';



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
                        <Layout>               
                            <Route path='/auth/signup' component={Signup} />
                            <Route path='/auth/login' component={Login} />
                        </Layout>

                    </Router>

                     
                        <Router path="/userpage">
                            <HeadLayout>
                            <ProtectedRoute exact path='/userpage' component={UserPage} />
                                <ProtectedRoute path='/userpage/course' component={CoursesPage} />
                                <ProtectedRoute path='/userpage/event' component={EventPage} />
                                <ProtectedRoute path='/userpage/quiz' component={QuizPage} />
                            </HeadLayout>

                        </Router>

                  {/*  
                    <Router path="/userpage/course">
                        <SideBarLayout>
                            <Route exact path='/userpage/course' component={Courses} />
                            <Route path='/userpage/course/frontend' component={FrontEndCourse} />
                            <Route path='/userpage/course/backend' component={BackEndCourse} />
                            <Route path='/userpage/course/visual' component={VisualCourse} />
                        </SideBarLayout>
                            </Router>
                    */}
                </Switch>
            </div>
        </Router>
    )
}

export default App;