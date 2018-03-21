import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import CardContainer from '../CardContainer/CardContainer';
import Favorites from '../Favorites/Favorites';
import Card from '../Card/Card';
import Summary from '../Summary/Summary';
import { 
  getMovieData, 
  getPeopleData, 
  getPlanetData, 
  getVehicleData 
} from '../../api';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      favorites: [],
      film: {},
      people: [],
      planets: [],
      vehicles: []
    };
  }

  async componentDidMount() {
    const film = await getMovieData();
    const people = await getPeopleData();
    const planets = await getPlanetData();
    const vehicles = await getVehicleData();
    this.setState({film, people, planets, vehicles});
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
