import express from 'express';
import starshipRouter from './resource/starship/starship.router';

const app = express();
const port = 3000;

app.use(express.json());

app.use('/api/starships', starshipRouter);


app.listen(port, () => {
  console.log(`Server is currently running on  http://localhost:${port}`);

});
