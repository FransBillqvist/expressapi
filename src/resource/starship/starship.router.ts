import express from 'express';
import {
  getAllStarships,
  getStarshipById,
  postNewStarship,
  updateStarshipById,
  deleteAllStarship,
  deleteStarshipById,
} from './starship.controller';

const starshipRouter = express
  .Router()
  .get('/', getAllStarships)
  .get('/:id', getStarshipById)
  .post('/', postNewStarship)
  .put('/:id', updateStarshipById)
  .delete('/', deleteAllStarship)
  .delete('/:id', deleteStarshipById);

export default starshipRouter;
