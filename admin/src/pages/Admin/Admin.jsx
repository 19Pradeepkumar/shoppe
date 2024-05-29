import React from 'react'
import "./Admin.css"
import Sidebar from '../../components/Sidebar/Sidebar'
import { Route,Routes } from 'react-router-dom'
import Addproduct from '../../components/AddProduct/Addproduct'
import ListProduct from '../../components/ListProduct/ListProduct'

export const Admin = () => {
  return (
    <div className='admin'>
      <Sidebar/>
      <Routes>
        <Route path='/addproduct' element={<Addproduct/>}/>
        <Route path='/listproduct' element={<ListProduct/>}/>
      </Routes>
    </div>
  )
}
