import React, { Component } from 'react';

class Anonymous extends Component {
  state={
    text: '',
  }
  changeText = (e) => {
    const typingText = e.target.value;
    this.setState({text: typingText});
  }
  input = () => {
    const newname = this.state.text;
     this.props.onAdd(newname);
     this.setState({text: ''});
    }
  render() {
    const text = this.state.text;
    return (
      <div>
        <input type="text" id="input" value={text} onChange={this.changeText}/>
        <button onClick={this.input}>Add</button>
      </div>
    );
  }
}

export default Anonymous;