import React,{Component} from 'react';
//import Header from './Header'
import data from './data';
import ContentCard from './Card'
import './App.css';
//import ButtonClick from './Button'

class App extends Component{
  constructor(){
    super();
  }
  // this.state = {
  //   clicks: 0,
  //   show: true
  // };
  
  // IncrementItem = () => {
  // this.setState({ clicks: this.state.clicks + 1 });
  //  }
  //  DecreaseItem = () => {
  //  this.setState({ clicks: this.state.clicks - 1 });
  // }

render(){
  const commentShow = data.map(element => {
      return <div key={element.id}>
          <ContentCard data={element}/>  
          
      </div>})
        return(
            <div>
              <div>{commentShow[0]}</div>  
            </div>
        )
    }
  }

export default App;