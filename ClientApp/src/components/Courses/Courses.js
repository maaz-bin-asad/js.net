import React, { Component } from 'react';
import "./Courses.css";
import ReactPlayer from 'react-player';

export class Courses extends Component {
    static displayName = Courses.name;



    constructor(props) {
        super(props);
        this.state = { Subcourses: [], loading: true };
    }
    componentDidMount() {
        this.populateData();
    }

    static renderDiv(Subcourses) {
        return (<>
            {Subcourses.map(sub => <div key={sub} className='coursescards'>

                <div className="box">
                    <div className="video_box heading_label">
                        <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
                    </div>
                    <section className="heading_label video_title"><h3>{sub.subcoursename}</h3> </section>
                    <section className="heading_label video_description"><p>Description</p> </section>
                </div>
            </div>
            )
            }

        </>);
    }

    render() {

        let contents = this.state.loading
            ? <p><em>Loading..</em></p>
            : Courses.renderDiv(this.state.Subcourses);


        return (

            <div >

                <h1 className="heading_label">Trending courses</h1>
                {contents}


            </div>
        );
    }

    async populateData() {
      const response = await fetch('Subcourse');
const data = await response.json();
console.log(data)
this.setState({ Subcourses: data, loading: false });
}
}








/*alternative appraoch for the above code*/

/*import { useState, useEffect } from 'react'*/

/*import Axios from 'axios';

const Courses = () => {

    const [data, setData] = useState([]);

    useEffect(async () => {

        await Axios.get("Subcourse")
            .then(result => setData(result.data));
        console.log(data);

    }, []);
  

    return (
        <>{data.map(sub => <div key={sub} className='coursescards'>

            <div className="box">
                <div className="video_box heading_label">
                    <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
                </div>
                <section className="heading_label video_title"><h3>{sub.subcoursename}</h3> </section>
                <section className="heading_label video_description"><p>Description</p> </section>
            </div>
        </div>
        )
        }
        </>)
}
export default Courses;*/
