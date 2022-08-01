import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './routes/home/Home';
import Header from './routes/header/Header';
import LivingRoom from './routes/living-room/LivingRoom';
import BedRoom from './routes/bed-room/BedRoom';
import Kitchen from './routes/kitchen/Kitchen';
import BathRoom from './routes/bathroom/BathRoom';
import Garden from './routes/garden/Garden';
import UserRouter from './routes/user/User';
import Wardrobe from './routes/wardrobe/Wardrobe';
import CartRoute from './routes/cart-route/CartRoute';
import UserContent from './component/User/UserContent';
import Admin from './component/admin/Admin';

function App() {
  
  return (
    <div className="App"> 
      <Routes>
        <Route path='/' element={<Header/>}>
          <Route index element={<Home/>}/>
          <Route path='livingroom' element={<LivingRoom/>}/>
          <Route path='bedroom' element={<BedRoom/>}/>
          <Route path='kitchen' element={<Kitchen/>}/>
          <Route path='bathroom' element={<BathRoom/>}/>
          <Route path='wardrobe' element={<Wardrobe/>}/>
          <Route path='garden' element={<Garden/>}/>
          <Route path='user' element={<UserRouter/>}>
            <Route path=':id' element={<UserContent />}/>
          </Route>
          <Route path='admin' element={<Admin />}/>
          <Route path='product'>
            <Route path=':id' element={<CartRoute/>}/>
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
