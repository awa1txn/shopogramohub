import './Home.scss';
import {Link} from 'react-router-dom'
// import { useContext } from 'react';
// import { AuthContext } from '../../App';

export default function Home() {
  // const { currentUser, setCurrentUser } = useContext(AuthContext)

  // console.log(currentUser)
  //would be wonderful if before navigation button checks if user already 
  //have nickname and direct to interface where you only need to use code without nickname
  //or create dynamic html dom that delete ability to write down new nickname if you already have one
  // much easier
  return (
    <>
    <div className='content'>
    <Link to='/host'><button className='button'>host room</button></Link>
    <Link to='/join'><button className='button'>join room</button></Link>
    </div>
    </>
  );
}
