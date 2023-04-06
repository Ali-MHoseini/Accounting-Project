import { Route, Routes} from 'react-router-dom'
import {Login} from './pages/pages'
function App() {
  return (
    <>
        <Routes>
            <Route path='/' element={<Login />}/>
            {/*<Route path='/cart' element={} />*/}
            {/*    <Route path='*'/>*/}
        </Routes>
    </>
  )
}

export default App
