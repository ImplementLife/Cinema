import { FC, useRef } from 'react';
import { movieAPI } from '../../services/MovieService';
import MovieItem from '../../components/Main/MovieItem';
import Error from '../../components/UI/Error/Error';
import Loader from '../../components/UI/Loader/Loader';
import MainLyout from '../../components/Main/re-use/MainLyout';
import MainSwipe from '../../components/Main/re-use/MainSwipe';

const movies = [
  {name: 'movie 1', id: 1, nameImg: 'movie1.jpg'},
  {name: 'movie 2', id: 2, nameImg: 'movie2.jpg'},
  {name: 'movie 3', id: 3, nameImg: 'movie3.jpg'},
  {name: 'movie 4', id: 4, nameImg: 'movie4.jpg'},
  {name: 'movie 5', id: 5, nameImg: 'movie5.jpg'},
  {name: 'movie 6', id: 7, nameImg: 'movie8.jpg'}
]

const MainPage: FC = () => {
  //const {data: movies, isLoading, error} = movieAPI.useFetchPreviewMovieQuery('');
  const swipeReff = useRef<HTMLDivElement>(null);

  return (
    <MainLyout>
      <div ref={swipeReff} className='main-content'>
        {/* {isLoading && 
          <Loader/>
        }
        {error && 
          // <Error>
          //     Error to load data from server
          // </Error>
          <div>
            Error to load data from server
          </div>
        } */}
        {movies &&
          <MainSwipe movies={movies} scrollReff={swipeReff} />
        }
        {movies && movies.map( movie =>
            <MovieItem
              key={movie.id}
              movie={movie}
            />
          )
        }
      </div>
    </MainLyout>
  );
};

export default MainPage;
