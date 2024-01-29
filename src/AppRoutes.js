import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import SharedLayout from './components/SharedLayout/SharedLayout';

const Home = lazy(() => import('./pages/Home/Home'));
const Movies = lazy(() => import('./pages/Movies/Movies'));
const MovieDetails = lazy(() => import('./pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('./pages/Cast/Cast'));
const Reviews = lazy(() => import('./pages/Reviews/Reviews'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));

const AppRoutes = () => {
  return (
    <Routes>
            <Route path="/" element={<SharedLayout />}>
                <Route index element={<Home />} />
                <Route path="movies" element={<Movies />} />
                <Route path="movies/:id" element={<MovieDetails />}>
                    <Route path="cast" element={<Cast />} />
                    <Route path="reviews" element={<Reviews />} />
                </Route>
                <Route path="*" element={<NotFoundPage />} />
            </Route>
    </Routes>
  );
};

export default AppRoutes;
