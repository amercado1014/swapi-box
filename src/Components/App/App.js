import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import CardContainer from '../CardContainer/CardContainer';
import Favorites from '../Favorites/Favorites';
import Summary from '../Summary/Summary';
import Swapi from '../../api';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      favorites: [],
      film: {},
      cards: [],
      people: [],
      planets: [],
      vehicles: [],
      errorStatus: false
    };
  }

  async componentDidMount() {
    await this.fetchApiData();
  }
  
  fetchApiData = async () => {
    try {
      const film = await Swapi.getMovieData();
      const people = await Swapi.getPeopleData();
      const planets = await Swapi.getPlanetData();
      const vehicles = await Swapi.getVehicleData();
      this.setState({film, people, planets, vehicles});
    } catch (error) {
      this.setState({ errorStatus: true });
    }  
  }

  setCardsArray = (type) => {
    this.setState({cards: this.state[type]});
  }

  render() {
    const { favorites, film, cards } = this.state;
    return (
      <div className="App"> 
        <h1 className="title">SWAPI-Box</h1>
        <div className="flex">
          <Summary film={film}/>
          <div className="right-side">
            <Nav setCards={this.setCardsArray} />
            <Favorites />
            <CardContainer cards={cards} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
