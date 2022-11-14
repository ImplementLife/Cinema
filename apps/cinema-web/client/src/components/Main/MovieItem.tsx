import { FC } from 'react';
import { URL } from '../../global/url';
import { Link } from 'react-router-dom';
import { IPreviewMovieDTO } from '../../models/MovieDTO';

interface IMovieItemProps {
  movie: IPreviewMovieDTO;
}

const MovieItem: FC<IMovieItemProps> = ({movie}) => {
  return (
    <div className='main__item'>

      <div 
        className='main__item-br'
        style={{backgroundImage:`url(${URL}/resources/images/${movie.nameImg})`}}></div>

      <div className='main__item-mask'></div>

      <Link
        className='main__item-name'
        to={`/main/movie?id=${movie.id}`}
        title={movie.name}
      >
        <span>{movie.name}</span>
      </Link>
    </div>
  );
};

export default MovieItem;
