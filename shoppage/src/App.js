import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './component/HomePage/HomePage';
import PageLayOut from './component/PageLayout';
import { Route, Routes } from 'react-router-dom';
import MyProduct from './component/ProductPage/product';


function App() {
  return (
    <>
      <div className="container-fluid p-0" style={{ backgroundColor: '#F6F6F6' }}>
        <Routes>
          <Route exact path='/' element={<PageLayOut />}>
            <Route index element={<HomePage />} />
            <Route index path='/products' element={<MyProduct />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
