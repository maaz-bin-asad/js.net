import React, { Component } from 'react';
import Category from './Category';
import ReactPlayer from 'react-player'
import "./Courses.css";
/*
const Maincourse = () => {

    return (
        <>
            <h1 className="heading_label">"" course</h1>
            <div className="box">
                <div className="video_box heading_label">
                    <div className="element_style"><ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U'/></div>
                </div>
                <section className="heading_label video_title"><h3>Title</h3> </section>
                <section className="heading_label video_description"><p>Description</p> </section>
            </div>
        </>)
}
export default Maincourse;
*/
export class Maincourse extends Component {
    static displayName = Maincourse.name;



    constructor(props) {
        super(props);
        this.state = { course: [], loading: true };
    }
    /*let history = useHistory();
const handleRoute = () => {
    history.push("/maincourse");
}*/
    componentDidMount() {
        this.populateData();
    }

    static renderDiv(course) {
        return (<>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Topic</th>
                        <th scope="col">Difficulty</th>
                        <th scope="col">What you will learn</th>
                        <th scope="col">Watch</th>
                    </tr>
                </thead>
                <tbody>
                    {course.map(sub => <tr key={sub} className='table-info'>
                        <th scope="row">{sub.subcoursename}</th>
                        <td>Easy</td>
                        <td>{sub.description}</td>
                        <td><a href="/userpage/course/maincourse/play">Watch video</a></td>
                </tr>
            )
                    }
                </tbody>
            </table>


        </>);
    }

    render() {

        let contents = this.state.loading
            ? <p><em>Loading..</em></p>
            : Maincourse.renderDiv(this.state.course);


        return (

            <div >

                <h1 className="heading_label">Welcome to the course</h1>
                {contents}


            </div>
        );
    }

    async populateData() {
        /*const response = await fetch('Course');*/
        const urlSearchParams = new URLSearchParams(window.location.search);
        const params = Object.fromEntries(urlSearchParams.entries());
        console.log(params)
        var id = params.id
        const response = await fetch('Subcourse/'+id);
        /*const response = await fetch('Course/getbydomain/Frontend');*/

        const data = await response.json();
        console.log(data)
        this.setState({ course: data, loading: false });
    }
}
