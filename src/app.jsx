import { Component } from 'react';
import './app.css';
import Anonymous from './components/anonymous';
import Habits from './components/habits';
import Navbar from './components/navbar';

class App extends Component {
  state = {
    habits: [
      {id: 1, name: 'Reading', count: 0},
      {id: 2, name: 'Running', count: 0},
      {id: 3, name: 'Coding', count: 0},
    ],
    totalcount : 0,
  };
  totalCount = () => {
    const onCount = this.state.habits.filter(item => item.count !== 0);
    const total = onCount.length;
    this.setState({totalcount : total})
  }
  handleAdd = (newname) => {
    const habits = [...this.state.habits];
    const name = newname;
    const getid =`2020${Math.random()*10000 + 1}`;
    const id = Math.floor(getid);
    console.log(name, id);
    habits.push({id: id, name: name, count: 0});
    this.setState({ habits});
  }
  handleIncrement = (habit) => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    habits[index].count++;
    this.setState({ habits});
    this.totalCount();
  };
  handleDecrement = (habit) => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    const count = habits[index].count - 1;
    habits[index].count = count < 0 ? 0 : count;
    this.setState({ habits});
    this.totalCount();
  };
  handleDelete = (habit) => {
    const habits = this.state.habits.filter(item => item.id !== habit.id);
    this.setState({habits});
    this.totalCount();
  };
  onReset = () => {
    const habits = [];
    this.setState({habits});
  }
  render() {
    return (
    <div className="box">
      <Navbar totalCounts={this.state.totalcount}/>
      <Anonymous onAdd={this.handleAdd}/>
        <Habits habits={this.state.habits}
          onIncrement={this.handleIncrement} 
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}/>
          <button onClick={this.onReset}>onReset</button>
    </div> 
    )
  }
  
}

export default App;
