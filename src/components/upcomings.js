import React, {Component} from 'react';

class Upcoming extends Component{
  render(){
    return(
      <div className = 'upcoming'>
      <a href= {this.props.url}>{this.props.title}</a>
      </div>
    )

  }

}

export default Upcoming;
