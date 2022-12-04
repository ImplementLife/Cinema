import { FC } from "react";
import { useNavigate } from 'react-router-dom';

interface IMovieCrumbsProps {
  movieName: string;
}

const BreadCrumbsUI: FC<IMovieCrumbsProps> = ({movieName}) => {

  const navigate = useNavigate();

  return (
    <ul className="breadcrumbs__list">
        <li 
          className="breadcrumbs__item"
          onClick={() => navigate('/main/movies')}
        >
          All Movies
        </li>
        <li className="breadcrumbs__item">
          {movieName}
        </li>
    </ul>
  );
};

export default BreadCrumbsUI;
