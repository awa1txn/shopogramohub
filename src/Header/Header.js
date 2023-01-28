import './Header.scss';
import {Link} from 'react-router-dom'

function Header() {
  return (
    <div className='header'>
      <div className='nav'>
        <ul className='nav-bar'>
          <Link to='/'><li>home</li></Link>
          <Link to='/contact'><li>contact</li></Link>
          <Link to='/about'><li>about</li></Link>
        </ul>
      </div>
    </div>
  );
}

export default Header;