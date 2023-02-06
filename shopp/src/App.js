import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './component/Header';
import AdminLogin from './component/AdminLogin';
import Admin from './component/admin/Admin';
import AddUsers from './component/admin/addUsers';
import AddProducts from './component/admin/addProducts';
import CreateProduct from './component/admin/createProduct';
import AddCategory from './component/admin/addCategory';
import AddMenu from './component/admin/AddMenu';
import Dashboard from './component/admin/AdminDashboard';
import CreateCategory from './component/admin/CreateCate';
function App() {
  return (
    <>
      <div className='container-fluid px-3 h-100 w-100 ' style={{ background: '#1C1C26' }}>
        <Routes>
          <Route exact path='/' element={<Header />} />
        </Routes>

        <Routes>
          <Route exact path='/adminlogin' element={<AdminLogin />} />
          <Route exact path='/admin' element={<Admin />} />
          <Route element={<Admin />}>
            <Route index path='/admin' element={<Dashboard />} />
            <Route path="/adminUsers" element={<AddUsers />} />
            <Route path="/adminProducts" element={<AddProducts />} />
            <Route path='/adminCategory' element={<AddCategory />} />
            <Route path='/adminMenu' element={<AddMenu />} />
            <Route path='/createProduct' element={<CreateProduct />} />
            <Route path='/createProduct/:id' element={<CreateProduct />} />
            <Route path='/createCategory' element={<CreateCategory />} />
          </Route>
        </Routes>


      </div>
    </>
  );
}
export default App;
