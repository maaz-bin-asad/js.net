import React, { Component } from 'react';
import Category from './Category';
import "./Courses.css";
import { Link } from 'react-router-dom';

/*const Courses = () => {

    return (
        <>

            <h1>Trending course</h1>
        </>)
}
export default Courses;*/

export class VisualCourse extends Component {
    static displayName = VisualCourse.name;

    constructor(props) {
        super(props);
        this.state = { courses: [], loading: true };
    }

    componentDidMount() {
        this.populateData();
    }

    static renderDiv(courses) {
        return (<>
            {courses.map(course => <div key={course} className='coursescards'>

                {/* <img src="#" alt='mypic' className='card_img'></img>*/}
                <div className='coursescard'>
                    <h3 className='coursescard_title'>{course.coursename}</h3>
                    <span className='coursescard_description'>{course.coursedomain}</span>
                    <br />
            
                    <form action={"Course/getCourse/" + course.courseid}>
                        <input type="submit" value="Start" />
                    </form>
                </div>
            </div>
            )
            }

        </>);
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading..</em></p>
            : VisualCourse.renderDiv(this.state.courses);

        return (
            <div >
                <h1 className="heading_label">Visual Design courses</h1>
                {contents}
            </div>
        );
    }

    async populateData() {
        const response = await fetch('Course/getByDomain/Visual');
        const data = await response.json();
        console.log(data)
        this.setState({ courses: data, loading: false });
    }
}
