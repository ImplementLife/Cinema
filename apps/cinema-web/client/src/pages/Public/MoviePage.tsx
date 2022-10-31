import { FC } from 'react';
import { useLocation } from 'react-router-dom';
import { movieAPI } from '../../services/MovieService';
import Loader from '../../components/UI/Loader/Loader';
import Error from '../../components/UI/Alert/Error';
import { IMovieDTO } from '../../models/MovieDTO';
import BreadCrumbs from '../../components/Main/MoviePageUI/BreadCrumbsUI';
import PosterUI from '../../components/Main/MoviePageUI/PosterUI';
import MobileUI from '../../components/Main/MoviePageUI/MobileUI';
import DescUI from '../../components/Main/MoviePageUI/DescUI';
import SessionUI from '../../components/Main/MoviePageUI/SessionUI';

// const movie: IMovieDTO = {
//   name: 'Movie',
//   description: '<h1>Movie Desc</h1>',
//   id: 1,
//   image: '/1.jpg',
//   trailerURL: 'https://youtube.com/',
//   tags: [
//     {name: 'action', id: 0},
//     {name: 'action', id: 0},
//     {name: 'action', id: 0},
//     {name: 'action', id: 0},
//     {name: 'action', id: 0},
//     {name: 'action', id: 0},
//   ],
//   duration: 127,
// }

const MoviePage: FC = () => {
  const location = useLocation();
  const {data: movie, isLoading, error} = movieAPI.useGetMovieQuery(location.pathname)

  return (
    <div className='movie__container'>
      {isLoading &&
        <Loader/>
      }
      {error &&
        <Error>
            Error to load data from server
        </Error>
      }
      {movie &&
        <>
          <BreadCrumbs movieName={movie.name}/>
          <div className='movie__content'>
            <div className="movie__info">
              <MobileUI movie={movie}/>
              <PosterUI movie={movie}/>
              <DescUI movie={movie}/>
              <SessionUI movie={movie}/>
            </div>
          </div>
        </>
      }
    </div>
  );
};

export default MoviePage;
