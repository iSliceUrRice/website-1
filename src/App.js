import logo from './logo.svg';
import './App.scss';
import { Route, Routes, Outlet, Navigate} from "react-router-dom";
import {Menu, Home, Page_1, Page_2, Page_3} from './Components/index';
function App() {


  
  return (
    <div >
      <Routes>
        <Route element={<Menus/>}>
          <Route index element={<Home/>}/>
          <Route path="page-1/" element={<Page_1/>}/>
          <Route path="page-2/" element={<Page_2/>}/>
          <Route path="page-3/" element={<Page_3/>}/>
        </Route>
      </Routes> 
    </div>
    
  );

  
}
const Menus = () => {
    return (
      <>
        <Menu/>
        <Outlet/>
      </>
    )
  }
export default App;
