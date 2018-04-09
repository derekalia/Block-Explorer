import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Blocks from './Blocks';
import Block from './Block';
import Settings from './Settings';
import Transaction from './Transaction';
import Sidebar from './Sidebar';
import Navbar from './Navbar';


class Layout extends React.Component {
  componentDidMount() {
    document.title = 'Block Scan';
  }

  render() {
    return (
      <Router>
        <Grid>
          <Sidebar />
          <Navbar />

          <Switch>
            <Route exact path="/" component={Blocks} />
            <Route exact path="/settings" component={Settings} />
            <Route exact path="/:block" component={Block} />
            <Route exact path="/:block/:transaction" component={Transaction} />            
          </Switch>
        </Grid>
      </Router>
    );
  }
}

export default Layout;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 200px auto;
  grid-template-rows: 67px auto;
  height: 100vh;
  font-family: 'overpass';
`;
