import HomePage from '../Pages/HomePage';
import NewPage from '../Pages/NewPage';
import ADDMOVIE from '../Pages/AddMoviePage';
import ViewMoviePage from '../Pages/ViewMoviePage';

const routes = {
  '/': HomePage,
  '/new': NewPage,
  "/add-movie" : ADDMOVIE,
  "/view-movies" : ViewMoviePage
};

export default routes;
