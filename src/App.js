import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Homepage from './components/views/Homepage/Homepage';
import { Container } from 'react-bootstrap';
import Header from './components/layout/Header/Header';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Container>
          <Header />
          <Switch>
            <Route exact path={'/'} component={Homepage} />
            <Route exact path={'/shop/:tableId'} component={''} />
          </Switch>
        </Container>
      </BrowserRouter>
    </Provider>

  );
}

export default App;
