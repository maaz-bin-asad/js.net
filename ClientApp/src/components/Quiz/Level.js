import React ,{ Component }from "react";



export class Level extends Component {
    static displayName = Level.name;



    constructor(props) {
        super(props);
        this.state = {Domain:"", loading: true };
    }
   /* let history = useHistory();
const handleRoute = () => {
    history.push("/maincourse");
}*/
    componentDidMount() {
        this.populateData();
    }

    static renderDiv(Domain) {
        return (<>
            <div className="col d-flex justify-content-center  my-2">
            <form action={"Test/getTest/" + Domain}>
                <input type="hidden" value="easy" name="level" />
                <input className="btn btn-success" type="submit" value="Easy" />
                </form>
            </div>
            <div className="col d-flex justify-content-center my-2">
            <form action={"Test/getTest/" + Domain}>
                <input type="hidden"  value="medium" name="level" />

                <input type="submit" className="btn btn-warning" value="Medium" />
                </form>
            </div>
            <div className="col d-flex justify-content-center my-2">
            <form action={"Test/getTest/" + Domain}>
                <input type="hidden"  value="hard" name="level" />
                      
                <input type="submit" className="btn btn-danger" value="Hard" />
                </form>
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
        /*const response = await fetch('Subcourse');
       

        const data = await response.json();
        console.log(data)
        this.setState({ Subcourses: data, loading: false });*/
    }
}