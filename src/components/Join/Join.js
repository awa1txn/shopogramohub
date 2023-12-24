import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Join.scss';

export default function Join() {
    const navigate = useNavigate();
    const [userName, setUserName] = useState('');
    const [roomID, setRoomID] = useState('');
    const [lengthValidation, setlengthValidation] = useState(false);
    
    return (
    <>
    <div className='content'>
        <input className="effect-1" type="text" placeholder="User name"
        onChange={(e)=>{setUserName(e.target.value)}}/>
        <span className="focus-border"></span>
    </div>
    <div className='content'>
        <input className="effect-1" type="text" placeholder="Room session id"
        onChange={(e)=>{setRoomID(e.target.value)}}/>
        <span className="focus-border"></span>
    </div>
    <div className='content'>
        {lengthValidation ? 'wrong user name length or room id': ''}
    </div>
    <div className='content'>
        <button className='button'
        onClick={()=>{
            if(userName.length>=2 && roomID.length>=4){
                // console.log('yay')
                // here must be api request 
                navigate(`/${roomID}`)                
            } else{
                setlengthValidation(true)
            }
        }}
        >join</button>
    </div>
    </>
    );
}