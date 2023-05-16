import './Room.scss';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
// import { AuthContext } from '../../App';


export default function Room() {
  // const {currentUser} = useContext(AuthContext)
  const location = useLocation();
  const navigate = useNavigate();
  const [item, setItem] = useState('')
  const [shoppingCart, setShoppingCart] = useState([])
  const [lengthValidation, setlengthValidation] = useState(false)

  // useEffect(()=>{
  //   if(currentUser.name === ''){//navigate user to home page if user doesn't authorised
  //     navigate('/',{replace:true})
  //   }
  // },[currentUser,navigate])
  return (
    <>
    <div className='content'>
    Room name: {location.pathname.slice(1)}
        <input onChange={(e)=>{setItem(e.target.value)}}></input>
        {!lengthValidation ? '' : 'less than 3 chars'}
        <button onClick={()=>{
            if(item.length>=3){
              setlengthValidation(false)  
              setShoppingCart([...shoppingCart, item]);
            } else{
                setlengthValidation(true)
            }
        }} className='button'>add to shoplist</button>
    </div>
    <div className='content'>
        {Array.isArray(shoppingCart) &&
        shoppingCart.map((el, index)=>{
          return <p key={index}>{el}</p>
        })}
    </div>
    </>
  );
}
