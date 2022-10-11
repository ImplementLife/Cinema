import { FC } from 'react';
import { PreviewMovieTypes } from '../../models/PreviewMovieTypes';
import { URL } from '../../services/global/values';
import { Link } from 'react-router-dom';

interface IMovieItemProps {
  movie: PreviewMovieTypes;
}

const MovieItem: FC<IMovieItemProps> = ({movie}) => {
  return (
    <div className='main-content'>
      <div className='main__item'>

        <div 
          className='main__item-br'
          style={{backgroundImage:`url(${URL}/resources/images/${movie.nameImg})`}}></div>

        <div className='main__item-mask'></div>

        <Link
          className='main__item-name'
          to={'/movies/' + movie.id}
          title={movie.name}
        >
          <span>{movie.name}</span>
        </Link>
      </div>
    </div>
  );
};

export default MovieItem;
