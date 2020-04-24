import React from 'react';

class T extends React.Component{
  constructor(props) {
    super(props);
  }

  
  
  render(){
    const scale = this.props.scale;
    return(
      <input value={this.props.temp}  onChange={(e)=>this.props.handleChange(e.target.value,scale)} />
    )
  }
}

export default T;