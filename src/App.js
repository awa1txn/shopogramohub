import './App.scss';
import Header from './Header/Header.js'
import Home from './Home/Home';
import {createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider} from 'react-router-dom'


export default function App() {

  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Root />}>
        <Route index element={<Home />} />
        <Route path='/contact' element={<Home />} />
        <Route path='/about' element={<Home />} />
        <Route path='/host' element={<Home />} />
        <Route path='/join' element={<Home />} />
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