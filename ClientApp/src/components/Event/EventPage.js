import React from 'react';
import './EventPage.css'
import Eventsinfo from "./Eventsinfo";
import PreviousEventInfo from "./PreviousEventInfo";
import ReactPlayer from 'react-player'


class EventPage extends React.Component {
        render() {
            return (
                <>

                    <div class="contain">
                        <div className="eventlistt">
                            <div className="event">
                                <div class="panel panel-info">
                                    <div className="panel-heading">
                                        <h3 className="panel-title">
                                            <span className="glyphicon glyphicon-calendar"></span>
                                   Upcoming Events in 2021
                                 </h3>
                                    </div>
                                    <div className="panel-body">
                                        <ul clasNames="media-list">
                                            {
                                                Eventsinfo.map((event) => (

                                                    <li className="media">
                                                        <div className="media-left">
                                                            <div className="panel panel-info text-center date">
                                                                <div className="panel-heading month">
                                                                    <span className="panel-title strong">
                                                                        {event.month}
                                                                    </span>
                                                                </div>
                                                                <div className="panel-body day text-info">
                                                                    {event.date}
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="media-body">
                                                            <h4 className="media-heading">
                                                                {event.heading}
                                                            </h4>
                                                            <p className="title">
                                                                {event.time}
                                                            </p>
                                                            <button className="attend"> Attend</button>
                                                        </div>
                                                    </li>



                                                ))
                                            }


                                        </ul>
                                        <a href="#" className="btn btn-default btn-block">More Events »</a>
                                    </div>
                                </div>


                            </div>
                        </div>
                        <div className="previousEvents">
                            <h1>Previous Events</h1>
                            {PreviousEventInfo.map((previousevent, index) => (
                                <div className="Events" key={index}>
                                    <div key={previousevent.id} className="Event">
                                        <ReactPlayer className="video" url={previousevent.video} width="100%"
                                            height="100%" controls={true} />
                                        <div className="description">
                                            <h5 className="title1">{previousevent.title}</h5>
                                            <h6>{previousevent.text}</h6>
                                            <p className="">{previousevent.date}</p>

                                        </div>
                                    </div>
                                </div>
                            ))}

                        </div>



                    </div>



                </>
            )
        }

    }

        

            
        
        
    


    

export default EventPage;