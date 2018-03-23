const mockCardData = {
  name: "Luke Skywalker",
  class: "people-card",
  data: {
    homeworld: "Tatooine",
    language: "Galactic Basic",
    population: "200000",
    species: "Human"
  }
};

const mockCardContainerData = [
  {
    name: "Luke Skywalker",
    class: "people-card",
    data: {
      homeworld: "Tatooine",
      language: "Galactic Basic",
      population: "200000",
      species: "Human"
    }
  },
  {
    name: "Darth Vader",
    class: "people-card",
    data: {
      homeworld: "Tatooine",
      language: "Galactic Basic",
      population: "200000",
      species: "Human"
    }
  },
  {
    name: "C-3PO",
    class: "people-card",
    data: {
      homeworld: "Tatooine",
      language: "n/a",
      population: "200000",
      species: "Droid"
    }
  }
];

const mockSummaryData = {
  date: "1983-05-25",
  episode: 6,
  text: "Luke Skywalker has returned to\r\nhis home planet of Tatooine",
  title: "Return of the Jedi"
};

export {
  mockCardData,
  mockCardContainerData,
  mockSummaryData
};