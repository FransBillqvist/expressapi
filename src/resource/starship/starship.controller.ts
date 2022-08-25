import { Response, Request } from 'express';
import { starships, Starship } from './starship.type';

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
  res.setHeader('Access-Control-Allow-Origin', '*');
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
  res.status(200).json([]);
};

export const deleteAllStarship = (req: Request, res: Response) => {
  res.status(200).json(null);
};

export const deleteStarshipById = (req: Request, res: Response) => {
  res.status(200).json(null);
};
