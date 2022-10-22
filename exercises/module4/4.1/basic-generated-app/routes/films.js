var express = require('express');
var router = express.Router();

const films = [];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json(films)
});

router.get('/', function (req, res) {
  const minimumFilmDuration = req?.query
    ? parseInt(req.query['minimum-duration'])
    : undefined;
  if (
    minimumFilmDuration &&
    (typeof minimumFilmDuration !== 'number' || minimumFilmDuration <= 0)
  )
    return res.sendStatus(400);

  if (!minimumFilmDuration) return res.json(films);

  const filmsReachingMinimumDuration = films.filter(
    (film) => film.duration >= minimumFilmDuration
  );
  return res.json(filmsReachingMinimumDuration);
});

router.get('/:id', function(req, res) {
  const indexFilm = films.findIndex((film) => film.id == req.params.id);
  if (indexFilm < 0) return res.sendStatus(404);

 return res.json(films[indexFilm]);
});



router.post('/', function (req, res) {
  const title =
    req?.body?.title?.trim()?.length !== 0 ? req.body.title : undefined;
  const link =
    req?.body?.content?.trim().length !== 0 ? req.body.link : undefined;
  const duration =
    typeof req?.body?.duration !== 'number' || req.body.duration < 0
      ? undefined
      : req.body.duration;
  const budget =
    typeof req?.body?.budget !== 'number' || req.body.budget < 0
      ? undefined
      : req.body.budget;

  if (!title || !link || !duration || !budget) return res.sendStatus(400);

  const lastItemIndex = films?.length !== 0 ? films.length - 1 : undefined;
  const lastId = lastItemIndex !== undefined ? films[lastItemIndex]?.id : 0;
  const nextId = lastId + 1;

  const newFilm = { id: nextId, title, link, duration, budget };

  films.push(newFilm);

  return res.json(newFilm);
});


router.delete('/:id', function (req, res) {
  const indexdelete = films.findIndex((film) => film.id == req.params.id );
  if (indexdelete <0 ) res.sendStatus(404);
  
  const itemsRemovedFromMenu = films.splice(indexdelete, 1);
  const itemRemoved = itemsRemovedFromMenu[0];

 return res.json(itemRemoved);
});

router.patch('/:id', function (req, res) {
  const title = req?.body?.title;
  const link = req?.body?.link;
  const duration = req?.body?.duration;
  const budget = req?.body?.budget;

  if (
    !req.body ||
    (title && !title.trim()) ||
    (link && !link.trim()) ||
    (duration && (typeof req?.body?.duration !== 'number' || duration < 0)) ||
    (budget && (typeof req?.body?.budget !== 'number' || budget < 0))
  )
    return res.sendStatus(400);

  const indexOfFilmFound = films.findIndex((film) => film.id == req.params.id);

  if (indexOfFilmFound < 0) return res.sendStatus(404);

  const filmPriorToChange = films[indexOfFilmFound];
  const objectContainingPropertiesToBeUpdated = req.body;

  const updatedFilm = {
    ...filmPriorToChange,
    ...objectContainingPropertiesToBeUpdated,
  };

  films[indexOfFilmFound] = updatedFilm;

  return res.json(updatedFilm);
});

module.exports = router;




module.exports = router;
