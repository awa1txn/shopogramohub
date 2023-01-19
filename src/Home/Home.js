import './Home.css';

//window.location.replace('https://codefrontend.com');

function Home() {
  return (
    <>
    <div className='content'>
        <button className='button' onClick={() => window.location.replace('http://localhost:3000/test')}>host room</button>
    </div>
    </>
  );
}

export default Home;