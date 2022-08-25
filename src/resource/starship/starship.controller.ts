import { Response, Request } from 'express';
import { Starship } from './starship.type';

let starships: Starship[] = [
  {
    id: 1,
    codeName: 'Starhopper',
    rud: false,
    numberOfStaticFires: 2,
    testDate: new Date(2019, 8, 27, 22, 0, 0, 0),
    hop: '150M',
    scraped: false,
    monument: false,
    orbit: 'nope',
    owner: 'SpaceX',
    location: 'Starbase OLM as a watertank, Boca Chica, TX, USA, Earth',
  },
  {
    id: 2,
    codeName: 'SN8',
    rud: true,
    numberOfStaticFires: 4,
    testDate: new Date(2020, 12, 9, 22, 45, 0, 0),
    hop: '12.5KM',
    scraped: true,
    monument: false,
    orbit: 'Nope',
    owner: 'SpaceX',
    location: 'Starbase, Boca Chica, TX, USA, Earth',
  },
  {
    id: 3,
    codeName: 'SN11',
    rud: true,
    numberOfStaticFires: 3,
    testDate: new Date(2021, 3, 30, 13, 0, 0, 0),
    hop: '10KM',
    scraped: true,
    monument: false,
    orbit: 'nope',
    owner: 'SpaceX',
    location: 'Starbase, Boca Chica, TX, USA, Earth',
  },
  {
    id: 4,
    codeName: 'Glenn, Mr Copy cat Pesos',
    rud: true,
    numberOfStaticFires: 1,
    testDate: new Date(2022, 4, 18, 16, 0, 0, 0),
    hop: '100KM',
    scraped: true,
    monument: false,
    orbit: 'nope',
    owner: 'Blue Origin #MrCopyCat',
    location: 'Van Horn, TX, USA, Earth',
  },
];

export const getAllStarships = (req: Request, res: Response) => {
  if (starships.length <= 0) {
    res.status(404).send('No starships found');
  } else {
    res.status(200).json(starships);
  }
};

export const getStarshipById = (req: Request, res: Response) => {
  const starship = starships.find(
    (starship) => starship.id === parseInt(req.params.id)
  );
  if (!starship) {
    res.status(404).send(`No starship with id ${req.params.id} was found`);
  }
  res.status(200).json(starship);
};

export const postNewStarship = (req: Request, res: Response) => {
  let newStarship: Starship = {
    id: req.body.id,
    codeName: req.body.codeName,
    rud: req.body.rud,
    numberOfStaticFires: req.body.numberOfStaticFires,
    testDate: req.body.testDate,
    hop: req.body.hop,
    scraped: req.body.scraped,
    monument: req.body.monument,
    orbit: req.body.orbit,
    owner: req.body.owner,
    location: req.body.location,
  };
  starships.push(newStarship);
  res.status(201).json(newStarship);
};

export const updateStarshipById = (req: Request, res: Response) => {
  let starship = starships.find(
    (starship) => starship.id === parseInt(req.params.id)
  );
  if (!starship) {
    res
      .status(404)
      .send(`No starship to update with Id ${req.params.id} was found`);
  }
  if (starship) {
    starships.splice(starships.indexOf(starship), 1);
  }
  starship = {
    id: req.body.id,
    codeName: req.body.codeName,
    rud: req.body.rud,
    numberOfStaticFires: req.body.numberOfStaticFires,
    testDate: req.body.testDate,
    hop: req.body.hop,
    scraped: req.body.scraped,
    monument: req.body.monument,
    orbit: req.body.orbit,
    owner: req.body.owner,
    location: req.body.location,
  };
  starships.push(starship);
  res.status(200).json(starship);
};

export const deleteAllStarship = (req: Request, res: Response) => {
  starships = new Array<Starship>();
  res.status(200).json(null);
};

export const deleteStarshipById = (req: Request, res: Response) => {
  const starship = starships.find(
    (starship) => starship.id === parseInt(req.params.id)
  );
  if (!starship) {
    res.status(404).send(`No starship with id ${req.params.id} was found`);
  }
  if (starship) {
    starships.splice(starships.indexOf(starship), 1);
    res.status(200).json(starship);
  }
};
