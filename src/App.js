import { Routes, Route } from 'react-router-dom';
import Contact from './routes/contact/Contact';
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/Navigation'
import Shop from './routes/shop/Shop';
import Signin from './routes/signin/Signin';



const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />} >
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='contact' element={<Contact />} />
        <Route path='sign-in' element={<Signin />} />
      </Route>

    </Routes>
  );
};

export default App;
