import './Header.css';

function Header() {
  return (
    <div className='header'>
      <div className='nav'>
        <ul className='nav-bar'>
          <a href='/'><li>home</li></a>
          <a href='/contact'><li>contact</li></a>
          <a href='/about'><li>about</li></a>
        </ul>
      </div>
    </div>
  );
}

export default Header;