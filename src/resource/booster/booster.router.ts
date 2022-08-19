import express from 'express';
import { getAllBoosters, postToBoosters, updateBooster, deleteBooster } from './booster.controller';

const boosterRouter = express
    .Router()
    .get('/', getAllBoosters)
    .post('/', postToBoosters)
    .put('/:id', updateBooster)
    .delete('/:id', deleteBooster);

export default boosterRouter;