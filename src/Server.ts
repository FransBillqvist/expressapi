import express from 'express';
import boosterRouter from './resource/booster/booster.router';

const app = express();
const port = 3000;

app.use(express.json());
app.use('/api/booster', boosterRouter);


app.listen(port, () => {
  console.log(`Server is currently running on  http://localhost:${port}`);

});
