import './Join.scss';

export default function Join() {
    return (
    <>
    <div className='content'>
        <input className="effect-1" type="text" placeholder="User name"/>
        <span className="focus-border"></span>
    </div>
    <div className='content'>
        <input className="effect-1" type="text" placeholder="Room name"/>
        <span className="focus-border"></span>
    </div>
    <div className='content'>
        <button className='button'>join</button>
    </div>
    </>
    );
}