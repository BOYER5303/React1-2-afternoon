import React, { Component } from 'react';
import people from "../../data";
import Person from "../Person/Person"

class Body extends Component {
    constructor (props){
        super(props);
        this.state ={
            personIndex: 0
        }
        
    }
    previousIndex = () => {
        if(this.state.personIndex === 0){
           let newPersonIndex = people.length -1;
           this.setState({personIndex: newPersonIndex})
        } else {
        this.setState({personIndex: this.state.personIndex - 1 });
    }      
}
    nextIndex = () => {
        if(this.state.personIndex === people.length -1){
            this.setState({
             personIndex: 0   
            })
        } else {
          this.setState({personIndex: this.state.personIndex + 1 });    
}
    }
    render() {
        let {personIndex} = this.state
        //console.log("DATA", people);
        const mappedData = people.map(person => {
           
            return <Person person={person}   />
       
        });
          
        return (
            <div>
                        {mappedData[personIndex]}
                        <button onClick= {this.previousIndex}>Previous</button>
                        <button onClick= {this.nextIndex}>Next</button>
            </div>
        );
    }


}

export default Body;