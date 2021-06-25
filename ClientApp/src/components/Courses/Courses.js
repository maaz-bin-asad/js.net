import React, { Component } from 'react';
import Category from './Category';
import "./Courses.css";
import { Link } from 'react-router-dom';
import Maincourse from './Maincourse';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useHistory } from 'react-router-dom';


/*const Courses = () => {

    return (
        <>

            <h1>Trending course</h1>
        </>)
}
export default Courses;*/

export class Courses extends Component {
    static displayName = Courses.name;


     
    constructor(props) {
        super(props);
        this.state = { courses: [], loading: true };
    }
    /*let history = useHistory();
const handleRoute = () => {
    history.push("/maincourse");
}*/
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
                            <span className='coursescard_description'>{course.course_difficulty}</span>
                    <br />

                    <Link tag={Link} className="courses_button" to="/userpage/course/maincourse/{course.link}">Start</Link>
{/*                    <button onClick={handleRoute}>Redirect</button>*/}

                   {/* <form action={"Course/getCourse/" + course.courseid}>
                        <input type="submit" value="Start" />
                        </form>*/}

                </div>
        </div>
               )
            }
            
        </> );
    }
    
    render() {
       
        let contents = this.state.loading
            ? <p><em>Loading..</em></p>
            : Courses.renderDiv(this.state.courses);
         

        return (
            
            <div >

                <h1 className="heading_label">Trending courses</h1>
                {contents}
               
                
            </div>
        );
    }

    async populateData() {
        /*const response = await fetch('Course');*/
      const response = await fetch('Course');
/*const response = await fetch('Course/getbydomain/Frontend');*/

const data = await response.json();
console.log(data)
this.setState({ courses: data, loading: false });
}
}
