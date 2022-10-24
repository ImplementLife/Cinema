import { FC,  useState } from 'react';
import { IPreviewMovieDTO } from '../../../models/MovieDTO';

interface IMainSwipeProps {
  movies: IPreviewMovieDTO[];
  scrollReff: React.RefObject<HTMLDivElement>;
}

const MainSwipe: FC<IMainSwipeProps> = ({movies, scrollReff}) => {
  const [statusLeft, setStatusLeft] = useState('none');
    const [statusRight, setStatusRight] = useState('');
    const [start, setStart] = useState(0);

    let step: number
    const widthCard = 350;
    const widthContent = movies.length * widthCard;

    const moveLeft = () => {
        if (start > 0) {
            step = start - widthCard
            setStart(step);
            setStatusRight ('flex')
        } 
        if (step === 0) {
            setStatusLeft ('none')
        }
        scrollReff.current?.scroll({
            left: step,
            behavior: 'smooth'
        })
    }
    const moveRight = () => {
        if (widthContent > start + document.documentElement.clientWidth) {
            step = start + widthCard
            setStart(step);
            setStatusLeft('flex')
        } 
        if (widthContent < start + document.documentElement.clientWidth + widthCard) {
            setStatusRight ('none')
        }
        scrollReff.current?.scroll({
            left: step,
            behavior: 'smooth'
        })
    }

  return (
    <div>
      <div 
          style={{display:statusLeft}}
          className='left-swiper'
          onClick={moveLeft}
      ></div>
      <div 
          style={{display:statusRight}}
          className='right-swiper'
          onClick={moveRight}
      ></div>
    </div>
  );
};

export default MainSwipe;
