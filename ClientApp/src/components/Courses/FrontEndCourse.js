import React, { Component } from 'react';
import Category from './Category';
import "./Courses.css";
import { Link } from 'react-router-dom';
/*import React, { useState, useEffect } from 'react'
import Axios from 'axios';

const FrontEndCourse = () => {
    
    const [data, setData] = useState([]);

    useEffect(async () => {

        await Axios.get('Course/getbydomain/Frontend')
            .then(result => setData(result.data));
        console.log(data);

    }, []);

    return (
        <>
            
            {data.map(course => <div key={course} className='coursescards'>
                <div className='coursescard'>
                    <h3 className='coursescard_title'>{course.coursename}</h3>
                    <span className='coursescard_description'>{course.coursedomain}</span>
                    <br />
                    <br />
                    <form action={"Course/getCourse/" + course.courseid}>
                        <input type="submit" value="Start" />
                    </form>
                </div>
            </div>
            )
            }
          
        </>)

};


export default FrontEndCourse;*/

export class FrontEndCourse extends Component {
    static displayName = FrontEndCourse.name;

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

               
                <div className='coursescard'>
                    <h3 className='coursescard_title'>{course.coursename}</h3>
                    <span className='coursescard_description'>{course.coursedomain}</span>
                    <br />
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
            : FrontEndCourse.renderDiv(this.state.courses);

        return (
            <div >
                <h1 className="heading_label">Frontend courses</h1>
                {contents}
            </div>
        );
    }

    async populateData() {
        const response = await fetch('Course/getByDomain/Frontend');
        const data = await response.json();
        console.log(data)
        this.setState({ courses: data, loading: false });
    }
}
