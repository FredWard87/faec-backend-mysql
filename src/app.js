import express from 'express';
const app = express();
 
/*  DotEnv  */
import dotenv from 'dotenv';
dotenv.config();
const port = process.env.PORT;
 
app.get('/', (req, res) => {
  res.send('Hello World!');
});
 
app.listen(port, () => {
  console.log(`Express is listening at http://localhost:${port}`);
});
