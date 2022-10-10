import { FC } from 'react';

interface IErrorProps {
  children: string,
}

const Error: FC <IErrorProps> = ({children}) => {
  return (
    <div className='error-wrapper'>
        <div className='error-content'>
            <div className='error-item'>
            {children}
            </div>
        </div>
    </div>
  );
}

export default Error;