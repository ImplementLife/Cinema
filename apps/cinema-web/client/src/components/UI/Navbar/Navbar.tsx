import { FC } from 'react';
import {Link} from "react-router-dom";
import { ButtonGroup, Button } from '@mui/material';


const Navbar: FC = () => {
  return (
    <div className='navbar-content'>
      <Link to='/main'>
        <div className='navbar-logo'></div>
      </Link>
      <ButtonGroup>
        <Link to='/main'>
          <Button>Main</Button>
        </Link>
        <Link to='/admin/movies'>
          <Button>Admin panel</Button>
        </Link>
      </ButtonGroup>
    </div>
  );
}

export default Navbar;