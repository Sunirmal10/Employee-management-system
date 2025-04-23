
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'


import Dashboard from './pages/Dashboard'

import NotFound from './pages/NotFound'
import AddEmployee from './pages/AddEmployee'
import Layout from './components/Layout'

import EmployeeList from './pages/EmployeeList'
import UpdateEmployee from './components/UpdateEmployee'

function App() {

  return (

   <div>
    <BrowserRouter>
    {/* <Navbar /> */}
    <Routes>
      <Route path='/' element={<Layout />}>
      <Route index element={<Dashboard />} />
      <Route path="/employees" element={<EmployeeList />} />
      <Route path="/addemployee" element={<AddEmployee />} />
      <Route path="/edit/:id" element={<UpdateEmployee />} />
      <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
    </BrowserRouter>
   </div>
  )
}

export default App
