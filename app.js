const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();
app.use(morgan('common'))
app.use(cors());

const apps = require('./playstore-data.js');

app.get('/apps', (req, res) => {
    const { genre, sort } = req.query;
    
    if (sort) {
      if (!['rating', 'app'].includes(sort)) {
        return res
        .status(400)
        .send('Sort must be one of rating or app');
            }
        } 

    if (sort) {
      if (sort === "rating") {
        apps.sort((a, b) => {
        return a["Rating"] > b["Rating"] ? 1: a["Rating"] < b["Rating"] ? -1 : 0;
      });
     } else if (sort === "app") {
       apps.sort((a, b) => {
        return a["App"] > b["App"] ? 1: a["App"] < b["App"] ? -1 : 0
       })
     }  
    }


    if (genre) {
      if (!['Action', 'Puzzle', 'Strategy', 'Casual', 'Arcade', 'Card'].includes(genre)) {
        return res
        .status(400)
        .send('Genre must be Action, Puzzle, Strategy, Casual, Arcade, Card')
      }
      let results = apps.filter(app => app["Genres"].toLowerCase() == genre);
      return res.json(results)
    }    
    
   

    res
      .json(apps);
  });

  
  app.listen(8000, () => {
    console.log('Server started on PORT 8000');
  });
