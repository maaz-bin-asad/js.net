
import React, { Component } from 'react';


export class MainQuiz extends Component {
    static displayName = MainQuiz.name;



    constructor(props) {
        super(props);
        this.state = { Subcourses: [], loading: true };
    }
    /*let history = useHistory();
const handleRoute = () => {
    history.push("/maincourse");
}*/
    componentDidMount() {
        this.populateData();
    }

    static renderDiv(Subcourses) {
        return (<>
            {Subcourses.map(sub => <div key={sub} className='coursescards'>

                <div className="box">
                   
                    <section className="heading_label video_title"><h3>{sub.statement}</h3> </section>
                    <section className="heading_label video_description"><p>{sub.option1}</p> </section>
                    <section className="heading_label video_description"><p>{sub.option2}</p> </section>
                    <section className="heading_label video_description"><p>{sub.option3}</p> </section>
                    <section className="heading_label video_description"><p>{sub.option4}</p> </section>
                </div>
            </div>
            )
            }

        </>);
    }

    render() {

        let contents = this.state.loading
            ? <p><em>Loading..</em></p>
            : MainQuiz.renderDiv(this.state.Subcourses);


        return (

            <div >

                <h1 className="heading_label">Questions</h1>
                {contents}


            </div>
        );
    }

    async populateData() {
        /*const response = await fetch('Course');*/
        const response = await fetch('Test/getTest/frontend?level=easy');
        /*const response = await fetch('Course/getbydomain/Frontend');*/

        const data = await response.json();
        console.log(data)
        this.setState({ Subcourses: data, loading: false });
    }
}