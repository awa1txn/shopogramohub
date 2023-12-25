import './Room.scss';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import useWebSocket from 'react-use-websocket';
// import { AuthContext } from '../../App';

const WS_URL = 'wss://eagle-deciding-lamprey.ngrok-free.app';


export default function Room() {

  const { sendJsonMessage  } = useWebSocket(WS_URL, {
    share: true,
    filter: () => false,
    onOpen: () => {
      console.log('WebSocket connection established.');
    },
    onMessage: (event) =>{
      console.log(JSON.parse(event.data).roomID === location.pathname.slice(1))
      if(JSON.parse(event.data).roomID === location.pathname.slice(1)) {
        setShoppingCart((prev) => prev.concat(JSON.parse(event.data).shopCartItemAdded))
      } else{
        console.log('wrong room')
      }
    }
  });

  // useEffect(() => {
  //   if (lastMessage !== null) {
  //     setShoppingCart((prev) => prev.concat(JSON.parse(lastMessage.data).shopCartItemAdded));
  //   }
  // }, [lastMessage]);

  // const {currentUser} = useContext(AuthContext)
  const location = useLocation();
  // const navigate = useNavigate();
  const [item, setItem] = useState('')
  const [shoppingCart, setShoppingCart] = useState([])
  const [lengthValidation, setlengthValidation] = useState(false)

  // const handleKeyPress = (e) => {
  //   // Check if the pressed key is Enter (key code 13)
  //   if (e.key === 'Enter') {
  //     // Do something when Enter is pressed
  //     alert(`Enter key pressed`);
  //     // You can perform other actions or call a function here
  //   }
  // };
  const itemSubmit = () => {
    if (item.length >= 3) {
      setlengthValidation(false);
      // console.log(item)
      sendJsonMessage({
        roomID: location.pathname.slice(1),
        shopCartItemAdded: item
      });
      setItem(''); // Clear the input after submitting
    } else {
      setlengthValidation(true);
    }
  };

  // useEffect(()=>{
  //   if(currentUser.name === ''){//navigate user to home page if user doesn't authorised
  //     navigate('/',{replace:true})
  //   }
  // },[currentUser,navigate])

  return (
    <>
      <div className='content'>
        Room name: {location.pathname.slice(1)}
        <input
          onChange={(e) => setItem(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              itemSubmit()
            }
          }}
          value={item}
        ></input>
        {!lengthValidation ? '' : 'Less than 3 chars'}
        <button onClick={itemSubmit} className='button'>
          add to shoplist
        </button>
      </div>
      <div className='content'>
        {Array.isArray(shoppingCart) &&
          shoppingCart.map((el, index) => {
            return <div className='item' key={index}>
              <p>{el}</p>
              <p
              className='unselectable'
              onClick={()=>{
                const newArr = shoppingCart.slice(0, index).concat(shoppingCart.slice(index+1));
                setShoppingCart(newArr)
              }}
              >X</p>
            </div>;
          })}
      </div>
    </>
  );
}
