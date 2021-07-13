import React from 'react';
import { Route } from "react-router-dom";
import  Maincourse  from './Maincourse';
import Play from './Play';
import { FrontEndCourse }from './FrontEndCourse';
import { BackEndCourse }  from './BackEndCourse';
import { VisualCourse } from './VisualCourse';
import { SideBarLayout } from '../SideBarLayout';
import {Courses } from './Courses';


const CoursesPage =()=> {     // landing page of courses page
    
        return (  
            <>
                
                <SideBarLayout>      { /* Side bar for choosing different courses */ }
                           
                    <Route exact path='/userpage/course' component={Courses} />             { /*Routes to different domains*/ }
                        <Route  path='/userpage/course/frontend' component={FrontEndCourse} />
                        <Route  path='/userpage/course/backend' component={BackEndCourse} />
                        <Route  path='/userpage/course/visual' component={VisualCourse} />
                                
                </SideBarLayout>

                        <Route path='/userpage/course/maincourse' component={Maincourse} />
                        <Route path='/userpage/course/maincourse/play' component={Play} />
                                          
            </>)
    }

export default CoursesPage;