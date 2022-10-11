import { FC } from 'react';
import {Link} from "react-router-dom";


const Navbar: FC = () => {
  return (
    <div className='navbar-content'>
      <Link to='/main'>
        <div className='navbar-logo'></div>
      </Link>
      <div className='navbar-items'>
        <Link to='/main'>Main</Link>
      </div>
    </div>
  );
}

export default Navbar;