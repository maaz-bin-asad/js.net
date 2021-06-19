import React, { Component } from 'react';

export class CoursesPage extends Component {
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
        /*const response = await fetch('Course');*/
        const response = await fetch('Course/getbydomain/Backend');
        /*const response = await fetch('Course/getbydomain/Frontend');*/

        const data = await response.json();
        console.log(data)
        this.setState({ courses: data, loading: false });
    }
}
