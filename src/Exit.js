import React, { Component } from "react";

export class Exit extends Component {
  constructor( props ){
    super();
    this.state = { ...props };
  }
  componentWillMount(){
    window.location.replace('http://localhost:3000/blog1')
  }
  render(){
    return (<section></section>);
  }
}

export default Exit;