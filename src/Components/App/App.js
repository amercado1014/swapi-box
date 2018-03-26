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
    await this.fetchApiData('film', 'filmData');
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
    if (category !== 'film') {
      this.setState({ cards: this.state[category] });
    }
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
        <img className='title-img' 
          src={require('../../swapi.png')} 
          alt="swapi logo"/>
        <Nav 
          fetchCards={this.fetchApiData} 
          favorites={favorites} 
          displayFavorites={this.setCardsArray} />
        <Summary film={film}/>
        <CardContainer 
          cards={cards} 
          setFavorites={this.setFavoritesArray}
          favorites={favorites} /> 
      </div>
    );
  }
}

export default App;
