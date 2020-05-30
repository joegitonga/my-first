import React, { Component } from 'react';
import Home from './Home/Home';
import Todo from './Todo/Todo';
import Timer from './Pomodoro/Timer';
import Coins from './Coins/Coins';
import Notes from './Notes/Notes';
import Chart from './Chart/Chart';
import Numbers from './Numbers/Numbers';

// Layout Components
import Header from '../shared/components/layout/Header/Header';
import Content from '../shared/components/layout/Content/Content';
import Footer from '../shared/components/layout/Footer/Footer';

// This is our fake data...
import { notes1, notes2 } from './Notes/data';
import './App.css';

import './App.css';

class App extends Component {
  constructor() {
    super();
    //Notes implementation
    //The first time we load the notes1...
    this.state = {
      notes: notes1
    };

    ////Charts Implementation
    // this.state = {
    //   chartType: 'line'
    // };

    // this.columns = [
    //   ['BTC', 3000, 6000, 10000, 15000, 13000, 11000],
    //   ['ETH', 2000, 3000, 5000, 4000, 3000, 940],
    //   ['XRP', 100, 200, 300, 500, 400, 300],
    // ];
  }

  setBarChart = () => {
    this.setState({
      chartType: 'bar'
    });
  }

  setLineChart = () => {
    this.setState({
      chartType: 'line'
    });
  }

  //This part is for Notes implementation too
  componentDidMount() {
    // After 10 seconds (10000 milliseconds) we concatenate our
    // data with notes2...
    setTimeout(() => {
      this.setState({
        notes: [...this.state.notes, ...notes2]
      });
    }, 10000);
  }

  render() {
    return (
      <div className="App">
        <Header title="Charts:" />

        <Content>
          {/* <Notes notes={this.state.notes} /> */}
          <Numbers />
        </Content>

        {/* <Content>
          <Chart columns={this.columns} chartType={this.state.chartType} />
          <p>
            Chart Type
            <button onClick={this.setBarChart}>Bar</button>
            <button onClick={this.setLineChart}>Line</button>
          </p>
        </Content> */}

        <Footer />
      </div>
    );
  }
}

export default App;