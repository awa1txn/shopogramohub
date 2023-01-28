import './Home.scss';
import {Link} from 'react-router-dom'

function Home() {
  return (
    <>
    <div className='content'>
    <Link to='/host'><button className='button'>host room</button></Link>
    </div>
    <div className='content'>
    <Link to='/join'><button className='button'>join room</button></Link>
    </div>
    </>
  );
}

export default Home;