import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import CardContainer from '../CardContainer/CardContainer';
import Favorites from '../Favorites/Favorites';
import Card from '../Card/Card';
import Summary from '../Summary/Summary';
import { getMovieData } from '../../api';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      favorites: [],
      film: {}
    };
  }

  async componentDidMount() {
    const film = await getMovieData();
    this.setState({film});
  }

  render() {
    const { film } = this.state;
    return (
      <div className="App"> 
        <h1 className="title">SWAPI-Box</h1>
        <div className="flex">
          <Summary film={film}/>
          <div className="right-side">
            <Nav />
            <Favorites />
            <CardContainer />
            <Card />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
