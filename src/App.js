import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Homepage from './components/views/Homepage/Homepage';
import { Container, Spinner } from 'react-bootstrap';
import Header from './components/layout/Header/Header';
import { fetchTables } from './redux/tablesRedux';
import TablePage from './components/views/TablePage/TablePage';

function App() {
  const [isDataLoaded, setIsDataLoaded] = useState(false)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTables()).then(() => setIsDataLoaded(true));
  }, [dispatch]);



  return (
    <Container>
      <Header />
      {isDataLoaded ? (
        <Routes>
          <Route path={'/'} element={<Homepage />} />
          <Route path={'/:tableId'} element={<TablePage />} />
        </Routes>
      ) : (
        <Spinner />
      )}
    </Container>
  );
}

export default App;
