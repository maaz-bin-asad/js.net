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
           
            <form action={"Test/getTest/" + Domain}>
                <input  type="hidden"  value="easy" name="level" />
                            <input  type="submit" value="Easy"/>
            </form>
            <form action={"Test/getTest/" + Domain}>
                <input type="hidden"  value="medium" name="level" />
                  
                            <input type="submit" value="Medium" />
            </form>
            <form action={"Test/getTest/" + Domain}>
                <input type="hidden"  value="hard" name="level" />
                      
                            <input type="submit" value="Hard" />
            </form>
            
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