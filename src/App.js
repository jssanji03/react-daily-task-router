import './App.css';
import {
  HashRouter,
  NavLink,Routes,Route,useNavigate
} from 'react-router-dom';

const Todo = () => {
  return (
    <>
      <p>這是 Todo 頁面 </p>
      <Logout/>
    </>
  );
};
const Login = () => {
  return <p>請登入！</p>;
};
const Logout = () => {
  let navigate = useNavigate();
  return <button className='btn' onClick={()=>navigate('/login')}>登出</button>;
};
const Register = () => {
  return <p>這是註冊頁面</p>;
};
const Home = () => {
  return <p>Home</p>;
};

function App() {
  return (
    <div className="container">
      <HashRouter>
        <div className="nav-link">
          <NavLink to="/">
            <p>首頁</p>
          </NavLink>
          <NavLink to="/register">
            <p>註冊頁面</p>
          </NavLink> 
          <NavLink to="/todo">
            <p>Todo 頁面</p>
          </NavLink>
          <NavLink to="/login">
            <p>登入頁面</p>
          </NavLink>
        </div>
        {/* Routes, Route 練習區 */}
        {/* 練習區 */}
        
        <Routes>
          <Route index element={<Home />} /> 
          <Route path="register" element={<Register />} /> 
          <Route path="todo" element={<Todo />} /> 
          <Route path="login" element={<Login />} /> 
          <Route path="logout" element={<Logout />} /> 
        </Routes>
        
      </HashRouter>
    </div>
  );
}

export default App;
