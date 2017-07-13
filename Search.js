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
        var styles = {
            searchContainer:{
                position: 'absolute',
                top: '130px',
                right: '80px'
            },
               searchInput:{
                width: '50%',
                margin: '20px 20px',
                padding: '5px 10px',
                fontSize: 15,
                fontFamily: "Courier New", 
            },
               searchResults:{
                fontSize: 20,
                fontFamily: "Courier New", 
            },
            title:{
                position:'absolute',
                left:'5px',
                top:'5px',
                margin: '20px 20px',
                padding: '5px 10px',
                fontSize: 70,
                fontFamily: "Courier New", 
            }
        }
        
        return (
            <div>
                <div style={Object.assign({}, styles.title)}>Anon Assist</div>

                <div className="main" style={Object.assign({}, styles.searchContainer)}>
                <input className="search" 
                    style={Object.assign({}, styles.searchInput)}
                    type="text"
                    placeholder="Search Here!"
                    onChange={(event) => {this.search(event.target.value)}}/>

            <br />
                <div style={Object.assign({}, styles.searchResults)}>
                    {this.state.listDoctors}
                </div>
            </div>
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