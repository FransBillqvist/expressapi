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
  .put('/id/:id', updateStarshipById)
  .delete('/id/:id', deleteStarshipById)
  .delete('/', deleteAllStarship)

export default starshipRouter;
