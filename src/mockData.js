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
  text: ["Luke Skywalker has returned to\r\nhis home planet of Tatooine", 
    "Luke Skywalker has returned to\r\nhis home planet of Tatooine"],
  title: "Return of the Jedi"
};

const mockApiVehicleData = {
  "count": 39,
  "next": "https://swapi.co/api/vehicles/?page=2",
  "previous": null,
  "results": [
    {
      "name": "Sand Crawler",
      "model": "Digger Crawler",
      "manufacturer": "Corellia Mining Corporation",
      "cost_in_credits": "150000",
      "length": "36.8",
      "max_atmosphering_speed": "30",
      "crew": "46",
      "passengers": "30",
      "cargo_capacity": "50000",
      "consumables": "2 months",
      "vehicle_class": "wheeled",
      "pilots": [],
      "films": [
        "https://swapi.co/api/films/5/",
        "https://swapi.co/api/films/1/"
      ],
      "created": "2014-12-10T15:36:25.724000Z",
      "edited": "2014-12-22T18:21:15.523587Z",
      "url": "https://swapi.co/api/vehicles/4/"
    }
  ]
};

const mockCleanVehicleData = [
  { 
    "class": "vehicle-card",
    "data": { 
      "class": "wheeled",
      "model": "Digger Crawler",
      "passengers": "30" 
    },
    "name": "Sand Crawler" 
  }
];

const mockApiFilmData = {
  "title": "A New Hope",
  "episode_id": 1,
  "opening_crawl": "It is a period of civil war",
  "director": "George Lucas",
  "producer": "Gary Kurtz, Rick McCallum",
  "release_date": "1977-05-25",
  "created": "2014-12-20T10:57:57.886000Z",
  "edited": "2015-04-11T09:45:01.623982Z",
  "url": "https://swapi.co/api/films/1/"
};

const mockCleanFilmData = { 
  "date": "1977-05-25", 
  "episode": 1, 
  "text": ["It is a period of civil war"], "title": "A New Hope" 
};

const mockApiPeopleData = {
  "results": [
    {
      "name": "Luke Skywalker",
      "height": "172",
      "mass": "77",
      "hair_color": "blond",
      "skin_color": "fair",
      "eye_color": "blue",
      "birth_year": "19BBY",
      "gender": "male",
      "homeworld": "https://swapi.co/api/planets/1/",
      "films": [
        "https://swapi.co/api/films/2/",
        "https://swapi.co/api/films/6/",
        "https://swapi.co/api/films/3/",
        "https://swapi.co/api/films/1/",
        "https://swapi.co/api/films/7/"
      ],
      "species": [
        "https://swapi.co/api/species/1/"
      ],
      "vehicles": [
        "https://swapi.co/api/vehicles/14/",
        "https://swapi.co/api/vehicles/30/"
      ],
      "starships": [
        "https://swapi.co/api/starships/12/",
        "https://swapi.co/api/starships/22/"
      ],
      "created": "2014-12-09T13:50:51.644000Z",
      "edited": "2014-12-20T21:17:56.891000Z",
      "url": "https://swapi.co/api/people/1/"
    }
  ]
};

const mockCleanPeopleData = [
  { 
    "class": "people-card", "data": { 
      "homeworld": undefined,
      "language": undefined,
      "population": undefined, 
      "species": undefined 
    }, 
    "name": "Luke Skywalker" 
  }
];

const mockApiPlanetData = {
  "results": [
    {
      "name": "Alderaan",
      "rotation_period": "24",
      "orbital_period": "364",
      "diameter": "12500",
      "climate": "temperate",
      "gravity": "1 standard",
      "terrain": "grasslands, mountains",
      "surface_water": "40",
      "population": "2000000000",
      "residents": [
        "https://swapi.co/api/people/5/"
      ],
      "films": [
        "https://swapi.co/api/films/6/",
        "https://swapi.co/api/films/1/"
      ],
      "created": "2014-12-10T11:35:48.479000Z",
      "edited": "2014-12-20T20:58:18.420000Z",
      "url": "https://swapi.co/api/planets/2/"
    }
  ]
};

const mockCleanPlanetData = [
  {
    "class": "planet-card", 
    "data": {
      "climate": "temperate", 
      "population": "2000000000", 
      "residents": "none", 
      "terrain": "grasslands, mountains"
    }, "name": "Alderaan"
  }
];

export {
  mockCardData,
  mockCardContainerData,
  mockSummaryData,
  mockApiVehicleData,
  mockCleanVehicleData,
  mockApiFilmData,
  mockCleanFilmData,
  mockApiPeopleData,
  mockCleanPeopleData,
  mockApiPlanetData,
  mockCleanPlanetData
};