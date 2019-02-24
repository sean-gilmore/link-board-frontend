// @flow
import * as React from 'react';
import LinkList from '../components/LinkList';
import Navigation from '../components/Navigation';
import { Provider } from 'react-redux'
import configureStore from '../configureStore'

const store = configureStore()

type Props = {

};

class Root extends React.Component<Props> {
  render () {
    return ( 
      <Provider store={store}>
        <div className='root'>
          <Navigation />
          <LinkList />
        </div>
      </Provider>
    );
  }
}

export default Root;
