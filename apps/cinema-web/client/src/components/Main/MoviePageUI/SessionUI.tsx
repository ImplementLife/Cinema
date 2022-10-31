import { FC } from "react";
import { IMovieDTO } from "../../../models/MovieDTO";

interface IMovieSessionProps {
  movie: IMovieDTO
}

const SessionUI: FC<IMovieSessionProps> = ({movie}) => {
  return (
    <div className="movie__info-colm3">
      <div className="movie__info-dates">
        <svg width='22' height='23' xmlns="http://www.w3.org/2000/svg">
          <path d="M4 0v1H0v22h22V1h-4V0h-2v1H6V0H4zM2 3h2v1h2V3h10v1h2V3h2v2H2V3zm0 4h18v14H2V7zm6 2v2h2V9H8zm4 0v2h2V9h-2zm4 0v2h2V9h-2zM4 13v2h2v-2H4zm4 0v2h2v-2H8zm4 0v2h2v-2h-2zm4 0v2h2v-2h-2zM4 17v2h2v-2H4zm4 0v2h2v-2H8zm4 0v2h2v-2h-2z" fill="#000" fillRule="nonzero"></path>
        </svg>
        <span>
          {/* {movie.dates} */}
          25.07.2022-27.07.2022
        </span>
      </div>
    </div>
  );
};

export default SessionUI;
