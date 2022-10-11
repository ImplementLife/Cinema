import { FC } from 'react';
import { movieAPI } from '../../services/MovieService';
import MovieItem from '../../components/Main/MovieItem';
import Error from '../../components/UI/Error/Error';
import Loader from '../../components/UI/Loader/Loader';

const MainPage: FC = () => {

  const {data: movies, isLoading, error} = movieAPI.useFetchPreviewMovieQuery('');

  return (
    <div className='main'>
      {isLoading && 
        <Loader/>
      }
      {error && 
        <Error>
            Error to load data from server
        </Error>
      }
      {movies && movies.map( movie =>
          <MovieItem
            key={movie.id}
            movie={movie}
          />
        )}
    </div>
  );
};

export default MainPage;
