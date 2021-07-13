import React, { Component } from 'react';
import {MainQuiz} from "./MainQuiz";
import { Route } from "react-router-dom";
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