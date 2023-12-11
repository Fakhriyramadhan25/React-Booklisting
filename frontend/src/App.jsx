import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import EditBook from './pages/EditBook';
import CreateBook from './pages/CreateBooks';
import ShowBook from './pages/ShowBook';
import DeleteBook from './pages/DeleteBook';

const App = () => {
  return (
<Routes>
  <Route path='/books/create' element={<CreateBook/>}/>
  <Route path='/' element={<Home/>}/>
  <Route path='/books/delete/:id' element={<DeleteBook/>}/>
  <Route path='/books/details/:id' element={<ShowBook/>}/>
  <Route path='/books/edit/:id' element={<EditBook/>}/>
</Routes>
  )
}


export default App;