import { FC } from 'react';
import { IMovieDTO } from '../../../models/MovieDTO';
import { URL } from '../../../global/url';

interface IPosterUIProps {
  movie: IMovieDTO
}

const PosterUI: FC<IPosterUIProps> = ({movie}) => {
  return (
    <div className="movie__info-colm1">
        <div className="poster__container">
          <div className="poster__holder"></div>
          <img className='poster' src={URL + '/resources/images/' + movie.nameImg} alt="woops" title={movie.name} />
        </div>
        <div className='trailer__container'>
          <a 
            rel="noopener noreferrer" 
            target="_blank" 
            href={movie.trailerURL}
          >
            Watch Trailer
          </a>
        </div>
    </div>
  );
};

export default PosterUI;
