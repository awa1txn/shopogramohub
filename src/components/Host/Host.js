import './Host.scss';
import { createRoom } from '../../middleware/host';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
// import { AuthContext } from '../../App';

export default function Host() {

    const navigate = useNavigate()
    // const {setCurrentUser} = useContext(AuthContext);
    const [name, setName] = useState('');
    const [lengthValidation, setlengthValidation] = useState(null);
    const [initRoom, setInitRoom] = useState('');
    
    useEffect(()=>{
        if(!!initRoom){
            navigate(`/${JSON.parse(initRoom).roomID}`)
        }
    },[navigate, initRoom])
    
    return (
    <>
    <div className='content'>
        <input className="effect-1" type="text" placeholder="User  name" onChange={(e)=>{setName(e.target.value)}}/>
        <span className="focus-border"></span>
        {lengthValidation ? 'Your name is supposed to contain more than 2 symbols.' : ''}
        <button className='button' onClick={()=>{
            if(name.length >= 2){
                setlengthValidation(false);
                setInitRoom(createRoom(name)); 
                //it would be wonderful if save user to localstorage
                // setCurrentUser({name: name})
            }
            else{setlengthValidation(true)}
        }} disabled={name === ''}>
            create
        </button>
    </div>
    </>
    );
}