import './Home.scss';

//window.location.replace('https://codefrontend.com');

function Home() {
  return (
    <>
    <div className='content'>
        <button className='button' onClick={() => window.location.replace('http://localhost:3000/host')}>host room</button>
    </div>
    <div className='content'>
        <button className='button' onClick={() => window.location.replace('http://localhost:3000/join')}>join room</button>
    </div>
    </>
  );
}

export default Home;