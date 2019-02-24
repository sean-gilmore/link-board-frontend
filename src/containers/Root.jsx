// @flow
import * as React from 'react';
import LinkList from '../components/LinkList';
import CreateList from '../components/CreateList';
import Navigation from '../components/Navigation';
import { Provider } from 'react-redux'
import configureStore from '../configureStore'
import { BrowserRouter as Router, Route} from 'react-router-dom';

const store = configureStore()

type Props = {

};

class Root extends React.Component<Props> {
  render () {
    return ( 
      <Provider store={store}>
        <div className='root'>
          <Navigation />
          <Router>
            <div>
              <Route path="/create-list" component={CreateList} />
              <Route path="/list/{listId}" component={LinkList} />
            </div>
          </Router>
        </div>
      </Provider>
    );
  }
}

export default Root;
