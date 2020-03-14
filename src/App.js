import React from 'react';
import Header from './components/Header/Header'
import data from './data';
import Body from './components/Body/Body'
import './App.css';
//import ButtonClick from './Button'

function App() {
  return (
    <div className = "App">
      <Body />
    </div>
  );
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

// render(){
//   const commentShow = data.map(element => {
//       return <div key={element.id}>
//           <ContentCard data={element}/>  
          
//       </div>})
//         return(
//             <div>
//               <div>{commentShow[0]}</div>  
//             </div>
//         )
//     }
//   }

export default App;