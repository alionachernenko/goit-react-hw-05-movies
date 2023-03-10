import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Header, Tab } from "./App.styled";

const Home = lazy(() => import('pages/Home/Home.jsx'))
const Movies = lazy(() => import('pages/Movies/Movies.jsx'))
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails.jsx'))
const Cast = lazy(() => import('pages/Cast/Cast.jsx'))
const Reviews = lazy(() => import('pages/Reviews/Reviews.jsx'))


export const App = () => {
  return (
    <>
    <Header>
      <Tab to='/'>Home</Tab>
      <Tab to='/movies'>Movies</Tab>
    </Header>
    <Suspense fallback={<p>Loading page</p>}>
    <Routes >
      <Route path="/" element={<Home/>}></Route>
      <Route path="/movies" element={<Movies/>}></Route>
      <Route path="movies/:movieId" element={<MovieDetails/>}>
        <Route path="cast" element={<Cast/>}></Route>
        <Route path="reviews" element={<Reviews/>}></Route>
      </Route>
      <Route path="*" element={<Home/>}></Route>
    </Routes>
    </Suspense>
    </>
  );
};
