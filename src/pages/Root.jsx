// @flow
import * as React from 'react';
import LinkList from '../components/LinkList';
import Navigation from '../components/Navigation';

type Props = {

};

class Root extends React.Component<Props> {
  render () {
    return ( 
      <div className='root'>
        <Navigation />
        <LinkList />
      </div>
    );
  }
}

export default Root;
