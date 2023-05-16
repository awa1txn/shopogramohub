import './App.scss';
import Header from './components/_Header/Header'
import Home from './components/_Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Host from './components/Host/Host';
import Join from './components/Join/Join';
import Room from './components/Room/Room';

// import { createContext } from 'react';
import {useState} from 'react';

import {createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider} from 'react-router-dom'


// export const AuthContext = createContext(null);

export default function App() {
  const [currentUser, setCurrentUser] = useState({ name: '' });

  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Root />}>
        <Route index element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path='/host' element={<Host />} />
        <Route path='/join' element={<Join />} />
        <Route path='/:roomID' element={<Room />} />
      </Route>
    )
  )

  return (
    <>
    {/* <AuthContext.Provider value={currentUser}> */}
      <RouterProvider router={routes} />
    {/* </AuthContext.Provider> */}
    </>
  );
}

const Root = () => {
  return (
    <>
      <div>
        <Header />
      </div>
      <div>
        <Outlet />
      </div>
    </>
  )
}