
import Category from './Category';
import ReactPlayer from 'react-player'
import "./Courses.css";


import React, { useState, useEffect } from 'react'
import Axios from 'axios';

const Maincourse = () => {

    const [data, setData] = useState([]);

    useEffect(async () => {
        const urlSearchParams = new URLSearchParams(window.location.search);
        const params = Object.fromEntries(urlSearchParams.entries());
        console.log(params)
        var id = params.id
        await Axios.get('Subcourse/'+id)
            .then(result => setData(result.data));
        console.log(data);

    }, []);




    return (
        <>
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
                    {data.map(sub => <tr key={sub} className='table-info'>
                        <th scope="row">{sub.subcoursename}</th>
                        <td>Easy</td>
                        <td>{sub.description}</td>
                        <td><a href="/userpage/course/maincourse/play">Watch video</a></td>
                    </tr>
                    )
                    }
                </tbody>
            </table>

        </>)
}
export default Maincourse;
/*
export class Maincourse extends Component {
    static displayName = Maincourse.name;



    constructor(props) {
        super(props);
        this.state = { course: [], loading: true };
    }
    *//*let history = useHistory();
const handleRoute = () => {
    history.push("/maincourse");
}*//*
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
        *//*const response = await fetch('Course');*//*
        const urlSearchParams = new URLSearchParams(window.location.search);
        const params = Object.fromEntries(urlSearchParams.entries());
        console.log(params)
        var id = params.id
        const response = await fetch('Subcourse/'+id);
        *//*const response = await fetch('Course/getbydomain/Frontend');*//*

        const data = await response.json();
        console.log(data)
        this.setState({ course: data, loading: false });
    }
}
*/