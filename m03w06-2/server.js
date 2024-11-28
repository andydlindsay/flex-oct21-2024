const express = require('express');
const morgan = require('morgan');

const app = express();
const port = 8080;

const videoGames = require('./data/video-games');

// configuration
app.set('view engine', 'ejs');

// middleware
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false })); // creates and populates req.body

// READ
// GET /videoGames
app.get('/videoGames', (req, res) => {
  const templateVars = {
    videoGames,
  };

  res.render('video-games', templateVars);
});

// CREATE

// GET /videoGames/new
app.get('/videoGames/new', (req, res) => {
  res.render('new-video-game');
});

// POST /videoGames
app.post('/videoGames', (req, res) => {
  // grab the info from req.body
  const title = req.body.title;
  const genre = req.body.genre;
  const platform = req.body.platform;
  const releaseYear = Number(req.body.releaseYear);

  // create a new id
  const id = Math.random().toString(36).slice(2); // generates a random alpha-numeric string

  // create a new video game object
  const newGame = {
    id: id,
    title: title,
    genre: genre,
    platform: platform,
    releaseYear: releaseYear
  };

  // update the videoGames object
  videoGames[id] = newGame;

  console.log(videoGames);

  // what do we do?
  res.redirect('/videoGames');
});

// DELETE
// POST /videoGames/:videoGameId/delete
app.post('/videoGames/:id/delete', (req, res) => {
  const videoGameId = req.params.id;

  delete videoGames[videoGameId];

  res.redirect('/videoGames');
});

// UPDATE

// GET /videoGames/:videoGameId/edit
app.get('/videoGames/:videoGameId/edit', (req, res) => {
  const videoGameId = req.params.videoGameId; // 'game1'

  const videoGame = videoGames[videoGameId];

  const templateVars = {
    videoGame: videoGame,
  };

  res.render('edit-video-game', templateVars);
});

// POST /videoGames/:videoGameId/edit
app.post('/videoGames/:videoGameId/edit', (req, res) => {
  // grab the info from req.body
  const title = req.body.title;
  const genre = req.body.genre;
  const platform = req.body.platform;
  const releaseYear = Number(req.body.releaseYear);

  const id = req.params.videoGameId;

  // update the video game
  videoGames[id].title = title;
  videoGames[id].genre = genre;
  videoGames[id].platform = platform;
  videoGames[id].releaseYear = releaseYear;

  // send the user somewhere
  res.redirect('/videoGames');
});

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
