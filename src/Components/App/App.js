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
    await this.fetchFilm();
  }

  fetchFilm = async () => {
    try {
      const film = await Swapi.filmData();
      this.setState({film}); 
    } catch (error) {
      this.setState({ errorStatus: true });
    }  
  }
  
  fetchApiData = async (category, dataCategory) => {
    if (this.state[category].length === 0) {
      try {
        const fetchedData = await Swapi[dataCategory]();
        this.setState({[category]: fetchedData});
      } catch (error) {
        this.setState({ errorStatus: true });
      }
    } 
    this.setState({ cards: this.state[category] })   
  }

  render() {
    const { favorites, film, cards } = this.state;
    return (
      <div className="App"> 
        <h1 className="title">SWAPI-Box</h1>
        <div className="flex">
          <Summary film={film}/>
          <div className="right-side">
            <Nav setCards={this.fetchApiData} />
            <Favorites />
            <CardContainer cards={cards} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
