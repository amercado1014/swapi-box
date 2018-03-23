import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import CardContainer from '../CardContainer/CardContainer';
import Summary from '../Summary/Summary';
import Swapi from '../../api';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      film: {},
      cards: [],
      people: [],
      planets: [],
      vehicles: [],
      favorites: [],
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
    if (!this.state[category].length) {
      try {
        const fetchedData = await Swapi[dataCategory]();
        this.setState({[category]: fetchedData});
      } catch (error) {
        this.setState({ errorStatus: true });
      }
    } 
    this.setCardsArray(category);  
  }

  setCardsArray = (category) => {
    this.setState({ cards: this.state[category] });
  }

  setFavoritesArray = (card) => {
    const found =
      this.state.favorites.find(favorite => favorite.name === card.name);
    if (!found) {
      this.setState({
        favorites: [...this.state.favorites, card]
      });
    } else {
      const filtered =
        this.state.favorites.filter(favorite => favorite.name !== card.name);
      this.setState({
        favorites: filtered
      });
    }
  }

  render() {
    const { film, cards, favorites } = this.state;
    return (
      <div className="App"> 
        <h1 className="title">SWAPI-Box</h1>
        <div className="flex">
          <Summary film={film}/>
          <div className="right-side">
            <Nav 
              fetchCards={this.fetchApiData} 
              favorites={favorites} 
              displayFavorites={this.setCardsArray} />
            <CardContainer 
              cards={cards} 
              setFavorites={this.setFavoritesArray} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
