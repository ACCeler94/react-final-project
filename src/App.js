import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Homepage from './components/views/Homepage/Homepage';
import { Container } from 'react-bootstrap';
import Header from './components/layout/Header/Header';
import { fetchTables } from './redux/tablesRedux';

function App() {

  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchTables()), [dispatch])


  return (
    <BrowserRouter>
      <Container>
        <Header />
        <Switch>
          <Route exact path={'/'} component={Homepage} />
          <Route exact path={'/:tableId'} component={''} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
}

export default App;
