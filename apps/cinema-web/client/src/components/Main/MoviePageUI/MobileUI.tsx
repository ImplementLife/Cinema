import { FC } from 'react';
import { IMovieDTO } from '../../../models/MovieDTO';
import { URL } from '../../../global/url';

interface IMovieMobileProps {
  movie: IMovieDTO
}

const MobileUI: FC<IMovieMobileProps> = ({movie}) => {
  return (
    <div className="mobile">
      <div className="mobile__jumbo">
        <div className="bg" style={{backgroundImage:`url(${URL}/resources/images/${movie.image})`}}></div>
        <a
          rel="noopener noreferrer" 
          target="_blank" 
          href={movie.trailerURL}
          >
          <div className="mobile__trailer"></div>
        </a>
      </div>
      <div className="mobile__title">
        {movie.name}
      </div>
    </div>
  );
};

export default MobileUI;