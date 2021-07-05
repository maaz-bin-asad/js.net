
import React, { Component } from 'react';

import {MainQuiz} from "./MainQuiz";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { QuizSideBarLayout } from '../QuizSideBarLayout';
import {Level }from "./Level";
import {UserTestProfile} from "./UserTestProfile";


export class QuizPage extends Component {
    static displayName = QuizPage.name;

    constructor(props) {
        super(props);
        this.state = { TestCategories: [], loading: true };
    }

    componentDidMount() {
        this.populateData();
    }

    static renderTable(TestCategories) {
        return (
            <>


                <QuizSideBarLayout>
                    <Route exact path='/userpage/quiz' component={UserTestProfile} />
                   
                    {TestCategories.map((val) =>
                        <Route path={'/userpage/quiz/' + val} component={Level} />
                  )
                    }
                    

                </QuizSideBarLayout>
                <Route path={'/userpage/quiz/mainquiz'} component={MainQuiz} />
                
            </>
        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading..</em></p>
            : QuizPage.renderTable(this.state.TestCategories);

        return (
            <div>

                {contents}
            </div>
        );
    }

    async populateData() {

        const response = await fetch('Test');


        const data = await response.json();
        console.log(data)
        this.setState({ TestCategories: data, loading: false });
    }
}

    /*render() {
        return (
            <>
              


                <QuizSideBarLayout>

                   {*//* <Route exact path='/userpage/course' component={Courses} />*//*}
                    <Route path='/userpage/quiz/frontend' component={FrontEndQuiz} />
                    <Route path='/userpage/quiz/backend' component={BackEndQuiz} />
                    <Route path='/userpage/quiz/Visual' component={VisualQuiz} />

                </QuizSideBarLayout>



            </>)
    }*/

/*export default CoursesPage;*/
/*export class CoursesPage extends Component {
    static displayName = CoursesPage.name;

    constructor(props) {
        super(props);
        this.state = { courses: [], loading: true };
    }

    componentDidMount() {
        this.populateData();
    }

    static renderTable(courses) {
        return (
            <table className='table table-striped' aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Domain</th>
                        <th>Rating</th>
                        <th>Course Link</th>
                    </tr>
                </thead>
                <tbody>
                    {courses.map(course =>
                        <tr key={course}>
                            <td>{course.coursename}</td>
                            <td>{course.coursedomain}</td>
                            <td>{course.courserating}</td>
                            <td>{course.courseurl}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading..</em></p>
            : CoursesPage.renderTable(this.state.courses);

        return (
            <div>
                <h1 id="tabelLabel" >List of courses</h1>
                {contents}
            </div>
        );
    }

    async populateData() {
        *//*const response = await fetch('Course');*//*
const response = await fetch('Course');
*//*const response = await fetch('Course/getbydomain/Frontend');*//*

const data = await response.json();
console.log(data)
this.setState({ courses: data, loading: false });
}
}
*/