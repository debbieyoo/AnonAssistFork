//Search.js, is the search
import React, {Component} from 'react';
import * as firebase from 'firebase';

class Search extends Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
            doctors: ["Dr Smith", "Dr Jones", "Dr Mary"],
            listDoctors: []
        }
    }
    render() {
        return (
            <div className="main">
            <input className="search" type="text"
                placeholder="Search Here!"
                onChange={(event) => {this.search(event.target.value)}}/>
        
        <br />
        {this.state.listDoctors}
        </div>
        );
    }
    search(text){
        var list = [];
        console.log(this.state.doctors);
        for(var i = 0; i<this.state.doctors.length; i++){
            if(this.state.doctors[i].toLowerCase().includes(text.toLowerCase())){
                list.push(
                    <div>
                    <h1>
                    {this.state.doctors[i]}
                    </h1>
                    </div>
                )
            }
        }
        this.setState({listDoctors:list});
    }
}
export default Search;