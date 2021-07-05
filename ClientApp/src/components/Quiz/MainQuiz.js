
import React, { Component } from 'react';


export class MainQuiz extends Component {
    static displayName = MainQuiz.name;



    constructor(props) {
        super(props);
        this.state = { Questions: [], Correct: "", Domain: "", Level:"", loading: true };
    }
    /*let history = useHistory();
const handleRoute = () => {
    history.push("/maincourse");
}*/
    componentDidMount() {
        this.populateData();
    }

    static renderDiv(Questions, Correct, Domain, Level) {
        return (<>
            {Questions.map(question => <div key={question} className='col d-flex justify-content-center'>

                <div className="card text-center my-2">
                    
                    <section className="card-title"><h3>{question.statement}</h3> </section>
                    <div className="heading_label">
                    <form action="Test/checkAnswer">
                        <input type="hidden" value={question.id} name="question_id" />
                        <input type="hidden" value={Domain} name="domain" />
                        <input type="hidden" value={Level} name="level" />
                        <input type="hidden" value="maazbinasad" name="username" />
                        <input type="hidden" value={question.option1} name="option" />
                            <input type="submit" className="btn btn-info my-3" value={question.option1} />
                        </form>
                    </div>
                    <div className="heading_label">
                    <form action="Test/checkAnswer">
                        <input type="hidden" value={question.id} name="question_id" />
                        <input type="hidden" value="maazbinasad" name="username" />
                        <input type="hidden" value={Domain} name="domain" />
                        <input type="hidden" value={Level} name="level" />
                        <input type="hidden" value={question.option2} name="option" />
                            <input type="submit" className="btn btn-info my-3" value={question.option2} />
                        </form>
                    </div>
                    <div className="heading_label">
                    <form action="Test/checkAnswer">
                        <input type="hidden" value={question.id} name="question_id" />
                        <input type="hidden" value="maazbinasad" name="username" />
                        <input type="hidden" value={Domain} name="domain" />
                        <input type="hidden" value={Level} name="level" />
                        <input type="hidden" value={question.option3} name="option" />
                            <input type="submit" className="btn btn-info my-3" value={question.option3} />
                        </form>
                    </div>
                    <div className="heading_label">
                    <form action="Test/checkAnswer">
                        <input type="hidden" value={question.id} name="question_id" />
                        <input type="hidden" value="maazbinasad" name="username" />
                        <input type="hidden" value={Domain} name="domain" />
                        <input type="hidden" value={Level} name="level" />
                            <input type="hidden" value={question.option} name="option" />
                            <input type="submit" className="btn btn-info my-3" value={question.option4} />
                        </form>
                        </div>
                  
                </div>
            </div>
            )
            }
        </>);
    }

    render() {

        let contents = this.state.loading
            ? <p><em>Loading..</em></p>
            : MainQuiz.renderDiv(this.state.Questions, this.state.Correct, this.state.Domain, this.state.Level);


        return (

            <div>
                <div className="col d-flex justify-content-center">
                    <div class="alert alert-info" role="alert">
                        Let's test yourself mate!
                    </div>

                    </div>


                <div className="col d-flex justify-content-center">
                    {this.state.Correct == "1" ? <p className="alert alert-success">Yep! Correct answer</p> : ""}
                </div>
                <div className="col d-flex justify-content-center">

                    {this.state.Correct == "0" ? <p className="alert alert-danger">Oops! Wrong answer</p> : ""}
                    </div>
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
        const response = await fetch("Test/getQuestions?domain=" + domain + "&level=" + level);
        const correct = params.correct
        

        const data = await response.json();
        console.log(data)
        this.setState({ Questions: data, Correct: correct, Domain:domain, Level:level, loading: false });
    }
}