import Main from './pages/main/main'
import Computers from './pages/computers/computers';
import WearableTech from './pages/wearabletech/wearabletech';
import Drones from './pages/dronesncameras/drones';
import Mobile from './pages/mobile/mobile';
import Tablets from './pages/tablets/tablets';
import TV from './pages/tv/tv';
import Audio from './pages/audio/audio';
import ItemDesk from './pages/description';


import { BrowserRouter, Routes, Route, Navigate, json } from "react-router-dom";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Link,
  Outlet,
  
  RouterProvider,
} from "react-router-dom";
import Sale from './pages/Sale/sale';
import Best from './pages/best/best'

const Root = () => {
  return (

      <div>
        
   
        <Outlet />
      </div>

  );
};

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root  />}>
        <Route index element={<Main/>} />:
        <Route path='/Computers' element={<Computers/>} />:
        <Route path='/Tablets' element={<Tablets/>} />:
        <Route path='/Drones' element={<Drones/>} />:
        <Route path='/Audio' element={<Audio/>} />:
        <Route path='/Mobile' element={<Mobile/>} />:
        <Route path='/TV' element={<TV/>} />:
        <Route path='/WearableTech' element={<WearableTech/>} />:
        <Route path='/item/:id' element={<ItemDesk/>} />:
        <Route path='/sale' element={<Sale/>} />:
        <Route path='/Best' element={<Best/>} />: 
      </Route>
    )
  );
  
  return <RouterProvider router={router}></RouterProvider>;


}

export default App;

/* undefined - განუსაზღვრელი */