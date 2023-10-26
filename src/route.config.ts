import ActorsCreate from "./actors/ActorsCreate";
import ActorsEdit from "./actors/ActorsEdit";
import ActorsIndex from "./actors/ActorsIndex";
import LandigPage from "./LandingPage";
import GenresCreate from "./genres/GenresCreate";
import GenresEdit from "./genres/GenresEdit";
import GenresIndex from "./genres/GenresIndex";
import MoviesCreate from "./movies/MoviesCreate";
import MoviesEdit from "./movies/MoviesEdit";
import MoviesFilter from "./movies/MoviesFilter";
import ThearesCreate from "./theares/ThearesCreate";
import ThearesEdit from "./theares/ThearesEdit";
import ThearesIndex from "./theares/ThearesIndex";
import RedirectToLandinPage from "./utils/RedirectToLandinPage";

const routes = [


    { path: '/genres/create', element: GenresCreate },
    { path: '/genres/edit/:id', element: GenresEdit },
    { path: '/genres', element: GenresIndex },

    { path: '/actors/create', element: ActorsCreate },
    { path: '/actors/edit/:id', element: ActorsEdit },
    { path: '/actors', element: ActorsIndex },

    { path: '/theares/create', element: ThearesCreate },
    { path: '/theares/edit/:id', element: ThearesEdit },
    { path: '/theares', element: ThearesIndex },


    { path: '/movies/create', element: MoviesCreate },
    { path: '/movies/edit/:id', element: MoviesEdit },
    { path: '/movies/filter', element: MoviesFilter },


    { path: '/', element: LandigPage },

    { path: '*', element: RedirectToLandinPage }
];

export default routes