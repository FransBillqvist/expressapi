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
  .get('/id/:id', getStarshipById)
  .post('/', postNewStarship)
  .put('id/:id', updateStarshipById)
  .delete('/', deleteAllStarship)
  .delete('id/:id', deleteStarshipById);

export default starshipRouter;
