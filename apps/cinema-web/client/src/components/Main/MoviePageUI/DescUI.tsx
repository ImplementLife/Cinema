import { FC } from "react";
import parse from 'html-react-parser';
import { IMovieDTO } from "../../../models/MovieDTO";
import { parseDuration, parseTags } from '../../../global/utils/movieUtils';

interface IMovieDescProps {
  movie: IMovieDTO
}

const DescUI: FC<IMovieDescProps> = ({movie}) => {

  const duration = parseDuration(movie.duration)
  const tags = parseTags(movie.tags)

  return (
    <div className="movie__info-colm2">
      <div className="movie__tittle">{movie.name}</div>
      <ul className="movie__credentials">
        <li>
          <div className="key">Duration:</div>
          <div className="val">{duration}</div>
        </li>
        <li>
          <div className="key">Tags:</div>
          <div className="val">{tags}</div>
        </li>
      </ul>
      <div className="movie__desc">
        <div>
          {parse(movie.description)}
        </div>
      </div>
    </div>
  );
};

export default DescUI;
