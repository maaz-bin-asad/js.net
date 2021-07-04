
import React, { Component } from 'react';


export class MainQuiz extends Component {
    static displayName = MainQuiz.name;



    constructor(props) {
        super(props);
        this.state = {Questions:[], loading: true };
    }
    /*let history = useHistory();
const handleRoute = () => {
    history.push("/maincourse");
}*/
    componentDidMount() {
        this.populateData();
    }

    static renderDiv(Questions) {
        return (<>
            {Questions.map(question => <div key={question} className='coursescards'>

                <div className="box">
                    
                    <section className="heading_label video_title"><h3>{question.statement}</h3> </section>
                    <form action="Test/checkAnswer">
                        <input type="hidden" value={question.id} name="question_id" />
                        <input type="hidden" value="a" name="username" />
                        <input type="hidden" value={question.option1} name="option" />
                        <input type="submit" value={question.option1} />
                    </form>
                    <form action="Test/checkAnswer">
                        <input type="hidden" value={question.id} name="question_id" />
                        <input type="hidden" value="a" name="username" />
                        <input type="hidden" value={question.option2} name="option" />
                        <input type="submit" value={question.option2} />
                    </form>
                    <form action="Test/checkAnswer">
                        <input type="hidden" value={question.id} name="question_id" />
                        <input type="hidden" value="a" name="username" />
                        <input type="hidden" value={question.option3} name="option" />
                        <input type="submit" value={question.option3} />
                    </form>
                    <form action="Test/checkAnswer">
                        <input type="hidden" value={question.id} name="question_id" />
                        <input type="hidden" value="a" name="username" />
                        <input type="hidden" value={question.option} name="option" />
                        <input type="submit" value={question.option4} />
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
            : MainQuiz.renderDiv(this.state.Questions);


        return (

            <div >
                
                <h1 className="heading_label">Questions</h1>
                {contents}


            </div>
        );
    }

    async populateData() {
        
        
        const urlSearchParams = new URLSearchParams(window.location.search);
        const params = Object.fromEntries(urlSearchParams.entries());
        console.log(params)
        const level = params.level
        const domain = params.domain
        const response = await fetch("Test/getQuestions?domain="+domain+"&level="+level);
        

        const data = await response.json();
        console.log(data)
        this.setState({ Questions: data, loading: false });
    }
}