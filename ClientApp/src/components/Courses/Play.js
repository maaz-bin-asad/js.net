import React, { Component } from 'react';
import Category from './Category';
import ReactPlayer from 'react-player'
import "./Courses.css";
const Play = () => {

    return (
        <>
            <h1 className="heading_label">Video</h1>
            <div className="box">
                <div className="video_box heading_label">
                    <div className="element_style"><ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U'/></div>
                </div>
                <section className="heading_label video_title"><h3>Title</h3> </section>
                <section className="heading_label video_description"><p>Description</p> </section>
            </div>
        </>)
}
export default Play;