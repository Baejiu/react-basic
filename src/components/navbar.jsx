import React, { Component } from 'react';

class Navbar extends Component {
  
  render() {
    const totalcount = this.props.totalCounts;
    return (
      <div className="navbar">
        Hello 
        <span className="totalcount">{totalcount}</span>
      </div>
    );
  }
}

export default Navbar;