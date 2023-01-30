import './Home.scss';
import {Link} from 'react-router-dom'

export default function Home() {
  return (
    <>
    <div className='content'>
    <Link to='/host'><button className='button'>host room</button></Link>
    <Link to='/join'><button className='button'>join room</button></Link>
    </div>
    </>
  );
}
