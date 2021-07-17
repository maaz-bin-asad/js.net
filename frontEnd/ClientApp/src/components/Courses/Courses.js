import React, { Component } from "react";
import Category from "./Category";
import "./Courses.css";

import { Maincourse } from "./Maincourse";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useHistory } from "react-router-dom";
import ReactPlayer from "react-player";
import { useState, useEffect } from "react";

import Axios from "axios";

const Courses = () => {
  const [data, setData] = useState([]);

  useEffect(async () => {
    await Axios.get("https://localhost:5001/Subcourse").then((result) =>
      setData(result.data)
    );
  }, []);

  return (
    <>
      {data.map((sub) => (
        <div key={sub} className='coursescards'>
          <div className='box'>
            {console.log(sub)}
            <div className='video_box heading_label'>
              <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
            </div>
            <section className='heading_label video_title'>
              <h3>{sub.subcoursename}</h3>
            </section>
            <section className='heading_label video_description'>
              <p>Description</p>
            </section>
          </div>
        </div>
      ))}
    </>
  );
};
export default Courses;
// import Axios from "axios";
// export class Courses extends Component {
//   static displayName = Courses.name;

//   constructor(props) {
//     super(props);
//     this.state = { Subcourses: [], loading: true };
//   }
//   /*let history = useHistory();
// const handleRoute = () => {
//     history.push("/maincourse");
// }*/
//   componentDidMount() {
//     this.populateData();
//   }

//   static renderDiv(Subcourses) {
//     return (
//       <>
//         {Subcourses.map((sub) => (
//           <div key={sub} className='coursescards'>
//             <div className='box'>
//               {console.log(sub)}
//               <div className='video_box heading_label'>
//                 <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
//               </div>
//               <section className='heading_label video_title'>
//                 <h3>{sub.subcoursename}</h3>{" "}
//               </section>
//               <section className='heading_label video_description'>
//                 <p>Description</p>{" "}
//               </section>
//             </div>
//           </div>
//         ))}
//       </>
//     );
//   }

//   render() {
//     let contents = this.state.loading ? (
//       <p>
//         <em>Loading..</em>
//       </p>
//     ) : (
//       Courses.renderDiv(this.state.Subcourses)
//     );

//     return (
//       <div>
//         <h1 className='heading_label'>Trending courses</h1>
//         {contents}
//       </div>
//     );
//   }

//   async populateData() {
//     await Axios.get("https://localhost:5001/Course").then((result) =>
//       this.setState({ Subcourses: result.data, loading: false })
//     );
//   }
// }
