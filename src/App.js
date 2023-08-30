import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Homepage from './components/views/Homepage/Homepage';
import { Container } from 'react-bootstrap';
import Header from './components/layout/Header/Header';
import { fetchTables } from './redux/tablesRedux';
import TablePage from './components/views/TablePage/TablePage';

function App() {

  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchTables()), [dispatch])


  return (
    <Container>
      <Header />
      <Routes>
        <Route path={'/'} element={<Homepage />} />
        <Route path={'/:tableId'} element={<TablePage />} />
      </Routes>
    </Container>
  );
}

export default App;
