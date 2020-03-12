
/* <div className='button-toolbar'>
    <Button variant="contained" color="primary">Previous</Button>
    <Button variant="contained" color="primary">Edit</Button>
    <Button variant="contained" color="primary">Delete</Button>
    <Button variant="contained" color="primary">New</Button>
    <Button variant="contained" color="primary">Next</Button>
</div> */



export default function ButtonClick(){
    return(
      this.state = {
        clicks: 0,
        show: true
      }
    }
  
    IncrementItem = () => {
      this.setState({ clicks: this.state.clicks + 1 });
    }
    DecreaseItem = () => {
      this.setState({ clicks: this.state.clicks - 1 });
    }
    
    render() {
      return (
        <div>
            <button onClick={this.DecreaseItem}>Previous</button>
            <button onClick={this.IncrementItem}>Next</button>
          
        
        </div>
      );
    }
  }
  
  export default App;