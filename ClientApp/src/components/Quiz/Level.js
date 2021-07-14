import React ,{ Component }from "react";
import "./level.css";

export class Level extends Component {
    static displayName = Level.name;



    constructor(props) {
        super(props);
        this.state = {Domain:"", loading: true };
    }
    componentDidMount() {
        this.populateData();
    }

    static renderDiv(Domain) {
        return (<>
            <div className="container">
                <div className=" level">
                    <form action={"Test/getTest/" + Domain}>
                        <input type="hidden" value="easy" name="level" />
                        <input className="btnn" type="submit" value="Easy" />
                    </form>
                    <form action={"Test/getTest/" + Domain}>
                        <input type="hidden" value="medium" name="level" />

                        <input type="submit" className="btnn" value="Medium" />
                    </form>
                    <form action={"Test/getTest/" + Domain}>
                        <input type="hidden" value="hard" name="level" />

                        <input type="submit" className="btnn" value="Hard" />
                    </form>
                </div>


            </div>

            
        </>);
    }

    render() {

        let contents = this.state.loading
            ? <p><em>Loading..</em></p>
            :Level.renderDiv(this.state.Domain);

        
        return (

            <div >

                
                {contents}


            </div>
        );
    }

    async populateData() {
        var pathArray = window.location.pathname.split('/');
        console.log(pathArray[3])
        this.setState({ Domain: pathArray[3], loading: false });
    }
}
