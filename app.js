const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();
app.use(morgan('common'))
app.use(cors());

const apps = require('./playstore-data.js');

app.get('/apps', (req, res) => {
    const { genre, sort } = req.query;
  

    if (genre) {
      if (!['Action', 'Puzzle', 'Strategy', 'Casual', 'Arcade', 'Card'].includes(genre)) {
        return res
        .status(400)
        .send('Genre must be Action, Puzzle, Strategy, Casual, Arcade, Card')
      }
    }
     let results = []
    if (genre) {
       results = apps.filter(app =>
        app["Genres"].toLowerCase().indexOf(genre.toLowerCase()) ! == -1 
       );
      } 
    //let results = apps;

    if (sort) {
      if (!['rating', 'app'].includes(sort)) {
        return res
        .status(400)
        .send('Sort must be one of rating or app');
            }
          }
    //sort by rating
    if (sort) {
      results
        .sort((a, b) => {
          return a["Rating"] > b["Rating"] ? 1: a["Rating"] < b["Rating"] ? -1 : 0;
            });
          }
  
    res
      .json(results);
  });

  
  app.listen(8000, () => {
    console.log('Server started on PORT 8000');
  });
