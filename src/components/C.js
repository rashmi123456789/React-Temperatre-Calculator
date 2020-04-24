import React from 'react';
import T from './T';

class C extends React.Component{

  constructor(props){
    super(props);

    this.state={
      temp:0,
      scale:"c"
    }

    this.handleChange=this.handleChange.bind(this);
  }

  handleChange(temp,scale) {
    this.setState({temp:temp, scale:scale});
  }

  render(){

    const fValue = this.state.scale === "c" ? (this.state.temp * 9 / 5) + 32 : this.state.temp;
    const cValue = this.state.scale === "f" ? (this.state.temp - 32) * 5 / 9 : this.state.temp;

    return(
      <div>
        <p>Enter Celsies Value</p>
        <T temp={cValue} scale="c" handleChange={this.handleChange} />
        <br/>
        <p>Enter Farenhide Value</p>
        <T temp={fValue} scale="f" handleChange={this.handleChange} />
      </div>
    )
  }
  
}

export default C;