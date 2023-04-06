import { Route, Routes} from 'react-router-dom'
import {Login} from './pages/pages'
import {Dashboard} from "./pages/Dashboard/Dashboard";
import {Customers} from "./pages/Customers/Customers";
import {Stuffs} from "./pages/Stuffs/Stuffs";
function App() {
  return (
    <>
        <Routes>
            <Route path='/' element={<Login />}/>
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/dashboard/customers' element={<Customers />} />
            <Route path='/dashboard/stuffs' element={<Stuffs />} />
            {/*    <Route path='*'/>*/}
        </Routes>
    </>
  )
}

export default App
