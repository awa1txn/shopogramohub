import './App.scss';
import Header from './_static/_Header/Header'
import Home from './_static/_Home/Home';
import About from './_static/About/About';
import Contact from './_static/Contact/Contact';
import Host from './_static/Host/Host';
import Join from './_static/Join/Join';

import {createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider} from 'react-router-dom'


export default function App() {

  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Root />}>
        <Route index element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path='/host' element={<Host />} />
        <Route path='/join' element={<Join />} />
      </Route>
    )
  )

  return (
    <>
      <RouterProvider router={routes} />
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