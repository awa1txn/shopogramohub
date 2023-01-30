import './Host.scss';
import { useState } from 'react';
class Room {
    constructor(name, roomID){
        this.name = name;
        this.roomID = roomID;
    }
}

export default function Host() {
    const [name, setName] = useState(null);
    const [lengthValidation, setlengthValidation] =useState(null);
    return (
    <>
    <div className='content'>
        <input className="effect-1" type="text" placeholder="User  name" onChange={(e)=>{setName(e.target.value);  setlengthValidation(false)}}/>
        <span className="focus-border"></span>
        <p className={lengthValidation ? '' : 'hidden'}>Your name is supposed to contain more than 3 symbols.</p>
        <button className='button' onClick={()=>{
            let u = null;
            if(name.length > 2){u = new Room(name, Math.floor(1000 + Math.random() * 9000)); console.log(JSON.stringify(u));}
            else{setlengthValidation(true)}
        }} disabled={name === ''}>
            create
        </button>
    </div>
    </>
    );
}